import pgClient from "./db.config.js";

pgClient.connect();

async function seed() {
  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS faculty (
    uuid INT UNIQUE NOT NULL,
    name VARCHAR(350) NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS students (
    uuid INT UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL UNIQUE,
    studentId INT UNIQUE,
    address VARCHAR(500) NOT NULL
    );
    `);
  return;
}

(async () => {
  try {
    await seed();
    console.log("Seeding complete.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
  }
})();
