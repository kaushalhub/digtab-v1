var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "register";

router.get("/", (req, res) => {
  res.render(`register`);
});

router.post("/insert", (req, res) => {
  let body = req.body;
  pool.query(`insert into register set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/login");
  });
});

router.post("/all", (req, res) => {
  const { email, password } = req.body;
  var query = `select * from register where email = "${req.body.email}" and password = "${req.body.password}"`;
  pool.query(query, (err, result) => {
    if (err) throw err;
    else if (result[0]) {
      req.session.studentid = result[0].id;

      res.redirect("/dashboard");
    } else {
      res.redirect("/login");
    }
  });
});


router.get("/logout", (req, res) => {
  req.session.studentid = null
  res.redirect('/login');
});


module.exports = router;
