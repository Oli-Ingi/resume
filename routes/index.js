var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ferilskra');
  //res.render('index', {title: "Síðan er í vinnslu"});
});

module.exports = router;
