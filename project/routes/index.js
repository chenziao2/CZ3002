var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./Models.js').initialize();
var User = mongoose.model("User");


/* GET home page. */
router.get('/', function(req, res, next) {
	var user = new User({username:'chenziao'});
	console.log(user.username);
	user.save(function(){});
  res.render('index', { title: 'Express' });
});

module.exports = router;
