var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
      title: 'Express', 
      message: "Bienvenue les gens",
      users: ["Paul", "Jack", "Marie", "Sarah"],
      admin: { firstname: "Glodie", lastname: "Tshimini", email: "admin@admin.fr"}
    });
});

module.exports = router;
