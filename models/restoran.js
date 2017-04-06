var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var restoransSchema = new Schema ({
  "name":String,
  "owner":String,
  "addres":String,
  "open_status": Boolean,
  "menulist":[{ type: Schema.Types.ObjectId, ref: 'Food'}]
});

var Restoran = mongoose.model('Restoran', restoransSchema);

module.exports = Restoran;
