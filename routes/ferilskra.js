var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('http://oig.is');
  //res.render('ferilskra');
});

module.exports = router;
