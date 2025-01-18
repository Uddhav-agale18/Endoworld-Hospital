import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../adminPages/blog/blogSlice';
import { Link } from 'react-router-dom'; // For navigation
import BACKEND_URL from '../backendApi';
const Blogs = () => {
  const dispatch = useDispatch();
  
  // Get blogs data from Redux store
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  // Fetch blogs on component mount
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const API_URL = `${BACKEND_URL}`; // Replace with your actual backend URL

  // Function to truncate text to 25 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="py-0 bg-gray-50 mb-4">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white bg-blue-600 py-10">BLOGS</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <p className="text-center text-gray-600">Loading blogs...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <div key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.image ? `${API_URL}${post.image}` : 'default-image-path.jpg'}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="mt-2 text-gray-600">
                    {truncateDescription(post.description, 25)}
                  </p>
                  <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                    <span>Category: {post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/blog/${post._id}`} // Pass the post ID to the details page
                      className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
