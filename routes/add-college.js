var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "add-college";

router.get("/", (req, res) => {
  res.render(`add-college`);
});

router.post("/insert",  (req, res) => {
    let body = req.body;
   
    pool.query(`insert into addcollege set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/edittravelogue");
    });
});

router.get("/workshopdetail", (req, res) => {
    var query = `select * from addcollege`  
    pool.query(query, (err, result) => {
      if (err) throw err;
      else res.json(result);
    }); 
  });

module.exports = router;
