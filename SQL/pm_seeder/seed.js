import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { Client } from "pg";
import copyStreamPkg from "pg-copy-streams";
const { from: copyFrom } = copyStreamPkg;
import { pipeline } from "stream/promises";

import { generateUsers } from "./generators/users.js";
import { generateTeams } from "./generators/teams.js";
import { generateTeamMembers } from "./generators/team_members.js";
import { generateProjects } from "./generators/projects.js";
import { generateProjectMembers } from "./generators/project_members.js";
import { generateLabels } from "./generators/labels.js";
import { generateTasks } from "./generators/tasks.js";
import { generateTaskComments } from "./generators/task_comments.js";
import { generateAttachments } from "./generators/attachments.js";
import { generateTaskLabels } from "./generators/task_labels.js";
import { generateActivityLogs } from "./generators/activity_logs.js";

dotenv.config();

const OUT_DIR = process.env.OUT_DIR || "./out";
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error("Provide DATABASE_URL in .env");

// --- Your generator config ---
const usersCount = parseInt(process.env.USERS_COUNT || "1000000", 10);
const teamsCount = parseInt(process.env.TEAMS_COUNT || "50000", 10);
const teamMembersFactor = parseFloat(process.env.TEAM_MEMBERS_FACTOR || "3");
const projectsCount = parseInt(process.env.PROJECTS_COUNT || "200000", 10);
const projectMembersFactor = parseFloat(
  process.env.PROJECT_MEMBERS_FACTOR || "4"
);
const labelsCount = parseInt(process.env.LABELS_COUNT || "200", 10);
const tasksCount = parseInt(process.env.TASKS_COUNT || "2000000", 10);
const commentsFactor = parseFloat(process.env.COMMENTS_FACTOR || "1.5");
const attachmentsFactor = parseFloat(process.env.ATTACHMENTS_FACTOR || "0.2");
const taskLabelsFactor = parseFloat(process.env.TASK_LABELS_FACTOR || "1.2");
const activityLogsFactor = parseFloat(
  process.env.ACTIVITY_LOGS_FACTOR || "0.5"
);

/**
 * Standard CSV copy for tables with no conflicts OR no foreign keys.
 * We've added (FORMAT CSV, HEADER TRUE, NULL '') to correctly
 * handle empty strings as NULL.
 */
async function copyCsv(client, filePath, tableName) {
  console.log(`COPY -> ${tableName} from ${filePath}`);
  // The '`' backticks are critical here
  const copyQuery = `COPY ${tableName} FROM STDIN WITH (FORMAT CSV, HEADER TRUE, NULL '')`;
  const stream = client.query(copyFrom(copyQuery));
  await pipeline(fs.createReadStream(filePath), stream);
  console.log(`✓ ${tableName} loaded`);
}

/**
 * DELETED 'copyCsvWithConflict'
 * DELETED 'copyCsvAndFilterBadFks'
 */

/**
 * NEW UNIVERSAL FUNCTION
 * Copies CSV data to a temp table, then inserts into the real table.
 * This function is robust and can:
 * 1. Filter (skip) rows with invalid Foreign Keys.
 * 2. Handle (skip) rows that violate a UNIQUE constraint.
 * 3. Update the table's ID sequence.
 */
async function copyCsvAdvanced(client, options) {
  const {
    filePath,
    tableName,
    csvColumns, // Array of column names in the CSV
    tempTableDef, // SQL string for temp table columns
    insertColumns, // Array of columns to insert into real table
    fkChecks, // Optional: Array of { fkColumn: 'created_by', refTable: 'users', refColumn: 'id' }
    conflictTarget, // Optional: String for ON CONFLICT, e.g. "(email)"
  } = options;

  const tempTableName = `temp_${tableName}_copy`;
  const csvColumnsString = csvColumns.join(", ");
  const insertColumnsString = insertColumns.join(", ");

  console.log(`COPY (Advanced) -> ${tableName} from ${filePath}`);

  // Build the SELECT, JOIN, and WHERE clauses
  let selectClause = insertColumns.map((col) => `t.${col}`);
  let joinClause = `FROM ${tempTableName} t`;
  let whereConditions = [];
  let joinIndex = 1;

  if (fkChecks && fkChecks.length > 0) {
    for (const check of fkChecks) {
      const joinAlias = `j${joinIndex++}`;
      joinClause += ` LEFT JOIN ${check.refTable} ${joinAlias} ON t.${check.fkColumn} = ${joinAlias}.${check.refColumn}`;

      // A row is valid only if:
      // 1. The FK column in the temp table is NULL (e.g., tasks.assigned_to)
      // 2. OR The corresponding JOIN found a match.
      whereConditions.push(
        `(t.${check.fkColumn} IS NULL OR ${joinAlias}.${check.refColumn} IS NOT NULL)`
      );
    }
  }

  try {
    await client.query("BEGIN");

    // 1. Create temp table
    await client.query(`
      CREATE TEMPORARY TABLE ${tempTableName} (
        ${tempTableDef}
      ) ON COMMIT DROP;
    `);

    // 2. Copy to temp table
    const copyQuery = `COPY ${tempTableName}(${csvColumnsString}) FROM STDIN WITH (FORMAT CSV, HEADER TRUE, NULL '')`;
    const stream = client.query(copyFrom(copyQuery));
    await pipeline(fs.createReadStream(filePath), stream);

    // 3. Insert from temp table, filtering bad FKs AND handling conflicts
    const insertQuery = `
      INSERT INTO ${tableName} (${insertColumnsString})
      SELECT ${selectClause.join(", ")}
      ${joinClause}
      ${
        whereConditions.length > 0
          ? "WHERE " + whereConditions.join(" AND ")
          : ""
      }
      ${conflictTarget ? `ON CONFLICT ${conflictTarget} DO NOTHING` : ""};
    `;

    await client.query(insertQuery);

    // 4. Manually update the sequence if we inserted explicit IDs
    if (insertColumns.includes("id")) {
      await client.query(`
        SELECT setval(pg_get_serial_sequence('${tableName}', 'id'), (SELECT MAX(id) FROM ${tableName}), TRUE);
      `);
      console.log(`-> Sequence for ${tableName}.id updated.`);
    }

    await client.query("COMMIT");
    console.log(`✓ ${tableName} loaded (Advanced)`);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error(`Failed to copy ${tableName} with Advanced loader`, err);
    throw err;
  }
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log("--- Generating CSVs ---");
  const usersCsv = await generateUsers(usersCount, OUT_DIR);
  const teamsCsv = await generateTeams(teamsCount, OUT_DIR, usersCount);
  const teamMembersCsv = await generateTeamMembers(
    teamsCount,
    usersCount,
    teamMembersFactor,
    OUT_DIR
  );
  const projectsCsv = await generateProjects(
    projectsCount,
    OUT_DIR,
    teamsCount,
    usersCount
  );
  const projectMembersCsv = await generateProjectMembers(
    projectsCount,
    usersCount,
    projectMembersFactor,
    OUT_DIR
  );
  const labelsCsv = await generateLabels(labelsCount, OUT_DIR);
  const tasksCsv = await generateTasks(
    tasksCount,
    OUT_DIR,
    projectsCount,
    usersCount
  );
  const commentsCsv = await generateTaskComments(
    tasksCount,
    commentsFactor,
    usersCount,
    OUT_DIR
  );
  const attachmentsCsv = await generateAttachments(
    tasksCount,
    attachmentsFactor,
    usersCount,
    OUT_DIR
  );
  const taskLabelsCsv = await generateTaskLabels(
    tasksCount,
    labelsCount,
    taskLabelsFactor,
    OUT_DIR
  );
  const activityCsv = await generateActivityLogs(
    tasksCount,
    projectsCount,
    usersCount,
    activityLogsFactor,
    OUT_DIR
  );
  console.log("--- All CSVs generated ---");

  // === copy to postgres ===
  const client = new Client({ connectionString: dbUrl });
  await client.connect();

  console.log("--- Starting database seed ---");
  // Order matters (FKs)

  // Users (has email conflict)
  await copyCsvAdvanced(client, {
    filePath: usersCsv,
    tableName: "users",
    csvColumns: [
      "id",
      "full_name",
      "email",
      "password_hash",
      "role",
      "is_active",
      "created_at",
      "updated_at",
    ],
    tempTableDef:
      "id BIGINT, full_name VARCHAR(120), email VARCHAR(150), password_hash TEXT, role user_role, is_active BOOLEAN, created_at TIMESTAMP, updated_at TIMESTAMP",
    insertColumns: [
      "id", // FIX: Included ID here to match generated CSV data structure
      "full_name",
      "email",
      "password_hash",
      "role",
      "is_active",
      "created_at",
      "updated_at",
    ],
    conflictTarget: "(email)",
    // No fkChecks
  });

  // Teams (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: teamsCsv,
    tableName: "teams",
    csvColumns: ["id", "name", "created_by", "created_at"],
    tempTableDef:
      "id BIGINT, name VARCHAR(120), created_by BIGINT, created_at TIMESTAMP",
    insertColumns: ["id", "name", "created_by", "created_at"],
    fkChecks: [{ fkColumn: "created_by", refTable: "users", refColumn: "id" }],
    // No conflictTarget
  });

  // Team Members (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: teamMembersCsv,
    tableName: "team_members",
    csvColumns: ["id", "team_id", "user_id", "joined_at"],
    tempTableDef:
      "id BIGINT, team_id BIGINT, user_id BIGINT, joined_at TIMESTAMP",
    insertColumns: ["team_id", "user_id", "joined_at"],
    conflictTarget: "(team_id, user_id)",
    fkChecks: [
      { fkColumn: "team_id", refTable: "teams", refColumn: "id" },
      { fkColumn: "user_id", refTable: "users", refColumn: "id" },
    ],
  });

  // Projects (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: projectsCsv,
    tableName: "projects",
    csvColumns: [
      "id",
      "team_id",
      "name",
      "description",
      "start_date",
      "end_date",
      "created_by",
      "created_at",
    ],
    tempTableDef:
      "id BIGINT, team_id BIGINT, name VARCHAR(200), description TEXT, start_date DATE, end_date DATE, created_by BIGINT, created_at TIMESTAMP",
    insertColumns: [
      "id",
      "team_id",
      "name",
      "description",
      "start_date",
      "end_date",
      "created_by",
      "created_at",
    ],
    fkChecks: [
      { fkColumn: "created_by", refTable: "users", refColumn: "id" },
      { fkColumn: "team_id", refTable: "teams", refColumn: "id" },
    ],
    // No conflictTarget
  });

  // Project Members (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: projectMembersCsv,
    tableName: "project_members",
    csvColumns: ["id", "project_id", "user_id", "assigned_at"],
    tempTableDef:
      "id BIGINT, project_id BIGINT, user_id BIGINT, assigned_at TIMESTAMP",
    insertColumns: ["project_id", "user_id", "assigned_at"],
    conflictTarget: "(project_id, user_id)",
    fkChecks: [
      { fkColumn: "project_id", refTable: "projects", refColumn: "id" },
      { fkColumn: "user_id", refTable: "users", refColumn: "id" },
    ],
  });

  // Labels (no conflicts, no FKs, plain copy is fine)
  await copyCsv(client, labelsCsv, "labels");
  // FIX: Still need to update sequence for simple copy
  try {
    await client.query(`
      SELECT setval(pg_get_serial_sequence('labels', 'id'), (SELECT MAX(id) FROM labels), TRUE);
    `);
    console.log(`-> Sequence for labels.id updated.`);
  } catch (e) {
    console.warn(`-> Could not set sequence for labels.id.`);
  }

  // Tasks (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: tasksCsv,
    tableName: "tasks",
    csvColumns: [
      "id",
      "project_id",
      "title",
      "description",
      "status",
      "priority",
      "assigned_to",
      "due_date",
      "created_by",
      "created_at",
      "updated_at",
    ],
    tempTableDef:
      "id BIGINT, project_id BIGINT, title VARCHAR(200), description TEXT, status task_status, priority task_priority, assigned_to BIGINT, due_date DATE, created_by BIGINT, created_at TIMESTAMP, updated_at TIMESTAMP",
    insertColumns: [
      "id",
      "project_id",
      "title",
      "description",
      "status",
      "priority",
      "assigned_to",
      "due_date",
      "created_by",
      "created_at",
      "updated_at",
    ],
    fkChecks: [
      { fkColumn: "project_id", refTable: "projects", refColumn: "id" }, // This will now filter if project_id is bad
      { fkColumn: "assigned_to", refTable: "users", refColumn: "id" },
      { fkColumn: "created_by", refTable: "users", refColumn: "id" },
    ],
    // No conflictTarget
  });

  // Task Comments (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: commentsCsv,
    tableName: "task_comments",
    csvColumns: ["id", "task_id", "user_id", "content", "created_at"],
    tempTableDef:
      "id BIGINT, task_id BIGINT, user_id BIGINT, content TEXT, created_at TIMESTAMP",
    insertColumns: ["id", "task_id", "user_id", "content", "created_at"],
    fkChecks: [
      { fkColumn: "task_id", refTable: "tasks", refColumn: "id" },
      { fkColumn: "user_id", refTable: "users", refColumn: "id" },
    ],
    // No conflictTarget
  });

  // Attachments (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: attachmentsCsv,
    tableName: "attachments",
    csvColumns: ["id", "task_id", "file_url", "uploaded_by", "uploaded_at"],
    tempTableDef:
      "id BIGINT, task_id BIGINT, file_url TEXT, uploaded_by BIGINT, uploaded_at TIMESTAMP",
    insertColumns: ["id", "task_id", "file_url", "uploaded_by", "uploaded_at"],
    fkChecks: [
      { fkColumn: "task_id", refTable: "tasks", refColumn: "id" },
      { fkColumn: "uploaded_by", refTable: "users", refColumn: "id" },
    ],
    // No conflictTarget
  });

  // Task Labels (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: taskLabelsCsv,
    tableName: "task_labels",
    csvColumns: ["id", "task_id", "label_id"],
    tempTableDef: "id BIGINT, task_id BIGINT, label_id BIGINT",
    insertColumns: ["task_id", "label_id"],
    conflictTarget: "(task_id, label_id)",
    fkChecks: [
      { fkColumn: "task_id", refTable: "tasks", refColumn: "id" },
      { fkColumn: "label_id", refTable: "labels", refColumn: "id" },
    ],
  });

  // Activity Logs (FIX: Use copyCsvAdvanced)
  await copyCsvAdvanced(client, {
    filePath: activityCsv,
    tableName: "activity_logs",
    csvColumns: [
      "id",
      "user_id",
      "project_id",
      "task_id",
      "action",
      "created_at",
    ],
    tempTableDef:
      "id BIGINT, user_id BIGINT, project_id BIGINT, task_id BIGINT, action VARCHAR(200), created_at TIMESTAMP",
    insertColumns: [
      "id",
      "user_id",
      "project_id",
      "task_id",
      "action",
      "created_at",
    ],
    fkChecks: [
      { fkColumn: "user_id", refTable: "users", refColumn: "id" },
      { fkColumn: "project_id", refTable: "projects", refColumn: "id" },
      { fkColumn: "task_id", refTable: "tasks", refColumn: "id" },
    ],
    // No conflictTarget
  });

  await client.end();
  console.log("🎉 All done");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
