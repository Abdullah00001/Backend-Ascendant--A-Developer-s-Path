import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateTaskComments(
  tasksCount,
  factor,
  usersCount,
  outDir
) {
  const total = Math.floor(tasksCount * factor);
  const file = path.join(outDir, "task_comments.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "task_id",
    "user_id",
    "content",
    "created_at",
  ]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    csv.write({
      id: id++,
      task_id: faker.number.int({ min: 1, max: tasksCount }),
      user_id: faker.number.int({ min: 1, max: usersCount }),
      content: faker.lorem.sentence(),
      created_at: faker.date.past().toISOString(),
    });
    if (i % 200000 === 0) console.log(`task_comments generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
