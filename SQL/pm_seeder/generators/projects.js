import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateProjects(count, outDir, teamsCount, usersCount) {
  const file = path.join(outDir, "projects.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "team_id",
    "name",
    "description",
    "start_date",
    "end_date",
    "created_by",
    "created_at",
  ]);

  for (let i = 1; i <= count; i++) {
    const start = faker.date.past();
    const end = faker.date.future();
    csv.write({
      id: i,
      team_id: faker.number.int({ min: 1, max: teamsCount }),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      start_date: start.toISOString().split("T")[0],
      end_date: end.toISOString().split("T")[0],
      created_by: faker.number.int({ min: 1, max: usersCount }),
      created_at: faker.date.past().toISOString(),
    });

    if (i % 50000 === 0) console.log(`projects generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
