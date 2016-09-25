var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./Models.js').initialize();
var User = mongoose.model("User");
var Hospital = mongoose.model("Hospital");
var Doctor = mongoose.model("Doctor");
var Appointment = mongoose.model("Appointment");

/* GET home page. */
router.get('/', function(req, res, next) {
  Hospital.find({},function(err,docs){
  console.log(err);
        console.log(docs[0].name);
    res.render('HomePage');});
});
router.get('/search_hospital', function(req, res, next) {
    res.render('SearchHospital');
});
router.get('/search_doctor', function(req, res, next) {
    res.render('SearchDoctor');
});
router.get('/register', function(req, res, next) {
    res.render('Register');
});
router.get('/about', function(req, res, next) {
    res.render('About');
});

module.exports = router;
