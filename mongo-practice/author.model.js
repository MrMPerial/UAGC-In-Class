const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Author', authorSchema);
