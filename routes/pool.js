var mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "digtab",
  port: "3306",
  connectionLimit: 100,
  multipleStatements: true
});

module.exports = pool;
