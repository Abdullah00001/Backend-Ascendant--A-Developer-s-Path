import fs from 'fs';
import { format } from 'fast-csv';

export function createCsvWriter(filePath, headers) {
  const ws = fs.createWriteStream(filePath);
  const csv = format({ headers, writeHeaders: true });
  csv.pipe(ws);
  return { csv, ws };
}
