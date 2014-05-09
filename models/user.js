var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  email: String,
  username: String,
  password: String,
  createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('users', usersSchema);