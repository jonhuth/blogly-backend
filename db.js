/** Database connection for Blogly. */

const { Client } = require("pg");
const dbStr = process.env.DATABASE_URL || "postgresql:///blogly";
const client = new Client({
  connectionString: dbStr,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();


module.exports = client;
