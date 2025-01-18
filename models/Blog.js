const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
