import path from "path";
import { faker } from "@faker-js/faker";
import { createCsvWriter } from "../lib/csvUtils.js";

export async function generateTaskLabels(
  tasksCount,
  labelsCount,
  factor,
  outDir
) {
  const total = Math.floor(tasksCount * factor);
  const file = path.join(outDir, "task_labels.csv");
  const { csv, ws } = createCsvWriter(file, ["id", "task_id", "label_id"]);

  let id = 1;
  for (let i = 0; i < total; i++) {
    csv.write({
      id: id++,
      task_id: faker.number.int({ min: 1, max: tasksCount }),
      label_id: faker.number.int({ min: 1, max: labelsCount }),
    });
    if (i % 200000 === 0) console.log(`task_labels generated: ${i}`);
  }

  csv.end();
  await new Promise((res) => ws.on("finish", res));
  return file;
}
