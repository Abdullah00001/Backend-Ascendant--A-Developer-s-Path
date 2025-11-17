import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateLabels(count, outDir) {
  const file = path.join(outDir, "labels.csv");
  const { csv, ws } = createCsvWriter(file, ["id", "name", "color"]);

  for (let i = 1; i <= count; i++) {
    csv.write({
      id: i,
      name: `${faker.word.noun()}_${i}`,
      color: "#" + faker.internet.color().replace("#", "").slice(0, 6),
    });
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
