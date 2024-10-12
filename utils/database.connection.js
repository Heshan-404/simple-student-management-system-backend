var mysql = require("mysql");
const { default: config } = require("../config/config");

var connection = mysql.createConnection({
  host: config.DATABASE_URL,
  port: config.PORT,
  database: config.DB_NAME,
  user: config.USER_NAME,
  password: config.PASSWORD,
  insecureAuth: true,
});

module.exports = connection;
