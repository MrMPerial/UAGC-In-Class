const mongoose = require('mongoose');

const puppySchema = mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  likes: [String],
  dislikes: [String]
});

module.exports = mongoose.model('Puppy', puppySchema);
