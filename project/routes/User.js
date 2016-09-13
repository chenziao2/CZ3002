var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
  var User = new Schema({
    username: String,
    password: String,
    email:    String,
    phone:    String
  },{collection: 'User'});
  mongoose.model("User",User);

};
