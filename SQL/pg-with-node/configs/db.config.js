import { Client } from "pg";

const pgClient = new Client({
  user: "root",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "school",
});

export default pgClient;
