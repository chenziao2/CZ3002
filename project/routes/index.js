var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./Models.js').initialize();
var User = mongoose.model("User");

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('HomePage');
});

module.exports = router;
