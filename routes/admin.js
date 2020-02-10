var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "admin";

router.get("/", (req, res) => {
  res.render(`admin`);
});

router.post("/insert", (req, res) => {
  let body = req.body;
  pool.query(`insert into workshop set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/admin");
  });
});



router.get("/alldata", (req, res) => {
  var query = `select d.*,(select h.name from register h where h.id = d.studentid) as name from certificate d;`
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  }); 
});

module.exports = router; 
