const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String
});

mongoose.model('Category', categorySchema);
