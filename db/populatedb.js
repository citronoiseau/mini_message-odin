#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP NOT NULL
);

INSERT INTO messages (text, username, added)
VALUES
  ('Hi there!', 'Amando', NOW()),
  ('Hello World!', 'Charles', NOW()),
  ('Salut tout le monde!', 'citronoiseau', NOW()),
  ('Hallo zusammen!', 'Zitronenvogel', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("Table created and data inserted");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.end();
  }
  console.log("done");
}

main();
