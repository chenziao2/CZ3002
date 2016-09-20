var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./Models.js').initialize();
var User = mongoose.model("User");
var GoogleMapsAPI = require("googlemaps");

var publicConfig = {
  key: 'AIzaSyAz5OedZ9ejavPcj2atHuaUKGP4Q51Z2SE',
  stagger_time:       1000, // for elevationPath 
  encode_polylines:   false,
  secure:             true // use https
  // optional, set a proxy for HTTP requests 
};
var gmAPI = new GoogleMapsAPI(publicConfig);

var params = {
  center: '444 W Main St Lock Haven PA',
  zoom: 15,
  size: '500x400',
  maptype: 'roadmap',
  markers: [
    {
      location: '300 W Main St Lock Haven, PA',
      label   : 'A',
      color   : 'green',
      shadow  : true
    },
    {
      location: '444 W Main St Lock Haven, PA',
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600'
    }
  ],
  style: [
    {
      feature: 'road',
      element: 'all',
      rules: {
        hue: '0x00ff00'
      }
    }
  ],
  path: [
    {
      color: '0x0000ff',
      weight: '5',
      points: [
        '41.139817,-77.454439',
        '41.138621,-77.451596'
      ]
    }
  ]
};
gmAPI.staticMap(params); // return static map URL


/* GET home page. */
router.get('/', function(req, res, next) {
	gmAPI.staticMap(params, function(err, binaryImage) {
		console.log(err);
  		console.log(binaryImage);
  		res.render('HomePage',{Map:binaryImage});
  		// fetch asynchronously the binary image
	});
});

module.exports = router;
