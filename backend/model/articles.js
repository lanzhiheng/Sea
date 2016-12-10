const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  tags: Array,
  category: String,
  createdTime: { type: Date, default: Date.now },
  body: String,
  isPost: { type: Boolean, default: false }
});

mongoose.model('Article', articleSchema);
