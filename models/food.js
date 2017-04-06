var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var foodsSchema = new Schema ({
  "name":String,
  "price":String,
  "expired_date":Date
});

var Food = mongoose.model('Food', foodsSchema);

module.exports = Food;
