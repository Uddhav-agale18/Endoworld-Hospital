const Blog = require('../models/Blog');

// Create a new blog post
exports.createBlog = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const newBlog = new Blog({ title, description, date, category, image });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create blog', error });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch blogs', error });
  }
};

// Get a single blog post by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch blog', error });
  }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, date, category, image },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update blog', error });
  }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete blog', error });
  }
};
