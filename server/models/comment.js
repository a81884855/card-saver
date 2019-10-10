const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Comment', commentSchema);
