import { pipeline } from "stream/promises";
import fs from "fs";
import copyStreamPkg from "pg-copy-streams";
const { from: copyFrom } = copyStreamPkg;

export async function copyCsvToTable(client, csvPath, tableName) {
  const stream = client.query(
    copyFrom(`COPY ${tableName} FROM STDIN WITH CSV HEADER`)
  );
  await pipeline(fs.createReadStream(csvPath), stream);
}
