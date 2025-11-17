import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateProjectMembers(
  projectsCount,
  usersCount,
  factor,
  outDir
) {
  const total = Math.floor(projectsCount * factor);
  const file = path.join(outDir, "project_members.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "project_id",
    "user_id",
    "assigned_at",
  ]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    csv.write({
      id: id++,
      project_id: faker.number.int({ min: 1, max: projectsCount }),
      user_id: faker.number.int({ min: 1, max: usersCount }),
      assigned_at: faker.date.past().toISOString(),
    });

    if (i % 50000 === 0) console.log(`project_members generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
