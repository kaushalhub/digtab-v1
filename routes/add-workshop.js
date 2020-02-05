var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "add-workshop";

router.get("/", (req, res) => {
  res.render(`add-workshop`);
});

router.post("/insert", (req, res) => {
  let body = req.body;

  pool.query(`insert into addworkshop set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/edittravelogue");
  });
});

router.get("/workshop", (req, res) => {
  var query = `select * from addworkshop`;
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});


router.get("/oneworkshop", (req, res) => {
  var query = `Select * from addworkshop where id = (select max(id) from addworkshop);`
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});



module.exports = router;
