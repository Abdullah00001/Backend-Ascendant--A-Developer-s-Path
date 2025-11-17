import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateActivityLogs(
  tasksCount,
  projectsCount,
  usersCount,
  factor,
  outDir
) {
  const total = Math.floor((tasksCount + projectsCount) * factor);
  const file = path.join(outDir, "activity_logs.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "user_id",
    "project_id",
    "task_id",
    "action",
    "created_at",
  ]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    const hasTask = Math.random() > 0.3;
    csv.write({
      id: id++,
      user_id: faker.number.int({ min: 1, max: usersCount }),
      project_id: faker.number.int({ min: 1, max: projectsCount }),
      task_id: hasTask ? faker.number.int({ min: 1, max: tasksCount }) : "",
      action: faker.hacker.verb(),
      created_at: faker.date.recent().toISOString(),
    });
    if (i % 100000 === 0) console.log(`activity_logs generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
