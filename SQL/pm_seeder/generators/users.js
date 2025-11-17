import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateUsers(count, outDir) {
  const file = path.join(outDir, "users.csv");
  const { csv, ws } = createCsvWriter(file, [
    "id",
    "full_name",
    "email",
    "password_hash",
    "role",
    "is_active",
    "created_at",
    "updated_at",
  ]);

  for (let i = 1; i <= count; i++) {
    csv.write({
      id: i,
      full_name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password_hash: faker.string.uuid(),
      role: "MEMBER",
      is_active: true,
      created_at: faker.date.past().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (i % 100000 === 0) console.log(`users generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
