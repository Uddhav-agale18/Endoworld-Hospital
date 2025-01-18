const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');  // Assuming you have a middleware for file uploads
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

// Routes
router.post('/add', upload.single('image'), createBlog);  // Add a new blog post
router.get('/', getAllBlogs);  // Get all blog posts
router.get('/:id', getBlogById);  // Get a specific blog post by ID
router.put('/edit/:id', upload.single('image'), updateBlog);  // Edit a blog post
router.delete('/delete/:id', deleteBlog);  // Delete a blog post

module.exports = router;
