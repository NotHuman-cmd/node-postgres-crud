const { Pool } = require("pg");
const {
  DB_DATABASE,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_USER,
} = require("../src/config.js");

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

module.exports = pool;
// import mysql2 from "mysql2";
// import { hostname } from "os";

// export const pool = mysql2.createPool({
//   host: "localhost",
//   user: "root",
//   database: "expressmysql",
//   password: 11730,
//   port: 3306,
// });
