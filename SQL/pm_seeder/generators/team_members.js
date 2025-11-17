import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateTeamMembers(
  teamsCount,
  usersCount,
  factor,
  outDir
) {
  const total = Math.floor(teamsCount * factor);
  const file = path.join(outDir, "team_members.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "team_id",
    "user_id",
    "joined_at",
  ]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    const teamId = faker.number.int({ min: 1, max: teamsCount });
    const userId = faker.number.int({ min: 1, max: usersCount });
    csv.write({
      id: id++,
      team_id: teamId,
      user_id: userId,
      joined_at: faker.date.past().toISOString(),
    });
    if (i % 50000 === 0) console.log(`team_members generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
