var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "dashboard";

router.get("/", (req, res) => {
    if (req.session.studentid) {
      var query = `select * from register where id = "${req.session.studentid}"; `;
      var query1 = `select * from certificate where studentid = "${req.session.studentid}"` ; 
      pool.query(query + query1, (err, result) => {
        if (err) throw err;
        else res.render(`dashboard`, { login: true, result: result });
      });
    } else {
      res.render("login", { login: false });
    }
  });
  
module.exports = router;
