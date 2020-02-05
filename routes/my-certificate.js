var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "my-certificate";

router.get("/", (req, res) => {
    if (req.session.studentid) {
        const { id } = req.query
      var query = `select * from certificate where id = '${id}';`
      var query1 = `select d.*,(select h.name from register h where h.id = d.studentid) as name from certificate d where studentid = '${req.session.studentid}'`;
     // var query1 = `select name,image,username,facebook,instagram,youtube,bio,twitter from signup where id = "${req.session.id}"; `
     // var query2 = `select count(id) as totalblog from editblog where userid = "${req.session.id}";`
      pool.query(query + query1, (err, result) => {
        if (err) throw err;
        else res.render(`my-certificate`, { result: result });
     //  else res.json(result)
       // console.log(result)
      })
    }
    else {
      res.redirect('/login')  
    }
  });

module.exports = router;
