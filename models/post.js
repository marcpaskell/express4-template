var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
  content: String,
  updated: Date,
  user: {
    type: Schema.ObjectId,
    ref: 'users'
  }
});

module.exports = mongoose.model('posts', postsSchema);
