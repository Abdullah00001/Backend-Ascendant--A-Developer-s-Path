import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

const statuses = ["TODO", "IN_PROGRESS", "IN_REVIEW", "COMPLETED", "CANCELLED"];
const priorities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

export async function generateTasks(count, outDir, projectsCount, usersCount) {
  const file = path.join(outDir, "tasks.csv");
  const { csv, ws } = createCsvWriter(file, [
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
  ]);

  for (let i = 1; i <= count; i++) {
    const due = faker.date.future();
    csv.write({
      id: i,
      project_id: faker.number.int({ min: 1, max: projectsCount }),
      title: faker.hacker.phrase().slice(0, 200),
      description: faker.lorem.paragraph(),
      status: faker.helpers.arrayElement(statuses),
      priority: faker.helpers.arrayElement(priorities),
      assigned_to: faker.number.int({ min: 1, max: usersCount }),
      due_date: due.toISOString().split("T")[0],
      created_by: faker.number.int({ min: 1, max: usersCount }),
      created_at: faker.date.past().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (i % 200000 === 0) console.log(`tasks generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
