var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "create-certificate";

router.get("/", (req, res) => {
  res.render(`create-certificate`);
});


router.post("/insert",  (req, res) => {
  let body = req.body;
  body['studentid'] = req.session.studentid;
  pool.query(`insert into certificate set ?`, body, (err, result) => {
      if (err) throw err;
      else res.redirect("/dashboard");
  });
});

module.exports = router;
