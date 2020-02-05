var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "index";

router.get("/", (req, res) => {
  if (req.session.studentid) {
    var query = `select * from register where id = "${req.session.studentid}"; `;
    var query1 = `select * from workshopdetail` ; 
    pool.query(query + query1, (err, result) => {
      if (err) throw err;
      else res.render(`index`, { login: true, result: result });
    });
  } else {
    res.render("index", { login: false });
  }
});



module.exports = router;
