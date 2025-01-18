import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog, getBlogs, updateBlog, deleteBlog } from './blogSlice';
import BACKEND_URL from '../../backendApi';
const BlogList = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  const [formData, setFormData] = useState({
    title: '',
    image: null,
    description: '',
    date: '',
    category: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append('title', formData.title);
    blogData.append('image', formData.image);
    blogData.append('description', formData.description);
    blogData.append('date', formData.date);
    blogData.append('category', formData.category);

    if (isEditing) {
      blogData.append('id', currentBlogId);
      dispatch(updateBlog(blogData));
    } else {
      dispatch(createBlog(blogData));
    }

    setFormData({
      title: '',
      image: null,
      description: '',
      date: '',
      category: '',
    });
    setIsEditing(false);
    setCurrentBlogId(null);
  };

  const handleEdit = (blog) => {
    setIsEditing(true);
    setCurrentBlogId(blog._id);
    setFormData({
      title: blog.title,
      image: null,
      description: blog.description,
      date: blog.date,
      category: blog.category,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const API_URL = `${BACKEND_URL}`;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {isEditing ? 'Edit Blog' : 'Create Blog'}
      </h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-full sm:max-w-xl mx-auto mb-8">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Blog Description"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          {isEditing ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      {/* Blog Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4">Blog List</h3>
        {loading ? (
          <p className="text-center text-gray-600">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error.message}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600">Title</th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600">Image</th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-800">{blog.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      <img
                        src={blog.image ? `${API_URL}${blog.image}` : 'default-image-path.jpg'}
                        alt={blog.title}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">{blog.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
