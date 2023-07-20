const { config } = require("dotenv");

config();
const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

module.exports = { PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER };
