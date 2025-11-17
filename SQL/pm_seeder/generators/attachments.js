import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateAttachments(
  tasksCount,
  factor,
  usersCount,
  outDir
) {
  const total = Math.floor(tasksCount * factor);
  const file = path.join(outDir, "attachments.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "task_id",
    "file_url",
    "uploaded_by",
    "uploaded_at",
  ]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    csv.write({
      id: id++,
      task_id: faker.number.int({ min: 1, max: tasksCount }),
      file_url: faker.internet.url(),
      uploaded_by: faker.number.int({ min: 1, max: usersCount }),
      uploaded_at: faker.date.past().toISOString(),
    });
    if (i % 50000 === 0) console.log(`attachments generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
