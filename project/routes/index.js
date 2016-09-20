var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./Models.js').initialize();
var User = mongoose.model("User");
var GoogleMapsAPI = require("googlemaps");

var publicConfig = {
  key: 'AIzaSyAj9ZMqwI_aJR1RDXwAiZXHzEg1T_ZKjnY',
  stagger_time:       1000, // for elevationPath 
  encode_polylines:   false,
  secure:             false, // use https 
};
var gmAPI = new GoogleMapsAPI(publicConfig);

// geocode API 
var geocodeParams = {
  "address":    "121, Curtain Road, EC2A 3AD, London UK",
  "components": "components=country:GB",
  "bounds":     "55,-1|54,1",
  "language":   "en",
  "region":     "uk"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  gmAPI.geocode(geocodeParams, function(err, result){
  	console.log(result);
	console.log(err);
  	res.render('HomePage',{Map:result});
});
});

module.exports = router;
