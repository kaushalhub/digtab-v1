var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "certificate-detail";

router.get("/", (req, res) => {
  res.render(`certificate-detail`);
});

router.post("/insert",  (req, res) => {
    let body = req.body;
   
    pool.query(`insert into workshopdetail set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/dashboard");
    });
});

router.get("/workshopdetail", (req, res) => {
    var query = `select * from workshopdetail`  
    pool.query(query, (err, result) => {
      if (err) throw err;
      else res.json(result);
    }); 
  });

module.exports = router;
