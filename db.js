/** Database connection for Blogly. */

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL || "postgresql:///blogly");

client.connect();


module.exports = client;
