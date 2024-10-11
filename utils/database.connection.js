var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "dbStudents",
  user: "root",
  password: "1234",
  insecureAuth: true,
});

module.exports = connection;
