var mysql = require("mysql");

const pool = mysql.createPool({
 // host: "localhost",
 // user: "root",
  // password: "123",
 // database: "digtab",
 host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b8aabbd32e7b69",
  password: "62a3b7d0",
  database: "heroku_2f0ee115e587537",
  port: "3306",
  connectionLimit: 100,
  multipleStatements: true
});

module.exports = pool;
