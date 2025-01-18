import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the ID from the URL
import stethoscop from '../images/stethoscope.jpg'; // Ensure correct path to image
import { useSelector } from 'react-redux';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]); // State for recent posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const links = useSelector((state) => state.socialMedia.links);

  // Fetch single post details
  useEffect(() => {
    const fetchPost = async () => {
      console.log('Fetching post with ID:', id); // Log the ID in the frontend
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch the post: ${response.statusText}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs/recent');
        if (!response.ok) {
          throw new Error(`Failed to fetch recent posts: ${response.statusText}`);
        }
        const data = await response.json();
        setRecentPosts(data); // Set the recent posts data
        setFilteredPosts(data); // Initially show all posts
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchPost();
    fetchRecentPosts();
  }, [id]); // Re-fetch when the `id` changes

  // Handle search query change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the recent posts based on the search query
    const filtered = recentPosts.filter(post =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  if (loading) return <p>Loading...</p>; // Display loading state
  if (error) return <p>Error: {error}</p>; // Display error if fetch fails
  if (!post) return <p>Post not found</p>; // Display message if no post found

  return (
    <div className="bg-gray-50">
      {/* Blog Title Over Background */}
      <div className="relative flex flex-col justify-center items-center text-center text-white">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${stethoscop})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)', // Adds blur effect
            opacity: 0.6, // Adjusted for better visibility
            height: '80vh', // Adjust height for header alignment
          }}
        ></div>

        {/* Content Layer */}
        <div className="z-10 py-20">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
          {/* Social Media Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href={links?.facebook || "https://facebook.com"}  // Dynamically set the Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-3 rounded-full text-white shadow-md hover:bg-blue-700 flex items-center justify-center"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={links?.twitter || "https://twitter.com"}  // Dynamically set the Twitter link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-3 rounded-full text-white shadow-md hover:bg-blue-600 flex items-center justify-center"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={links?.instagram || "https://instagram.com"}  // Dynamically set the Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full text-white shadow-md hover:bg-pink-700 flex items-center justify-center"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={links?.linkedin || "https://linkedin.com"}  // Dynamically set the LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-3 rounded-full text-white shadow-md hover:bg-blue-900 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32 mb-5">
        {/* Main Content (Image and Description) */}
        <div className="col-span-2 bg-white shadow-lg p-6">
          <img
            src={post.image ? `http://localhost:5000${post.image}` : 'default-image-path.jpg'}
            alt={post.title}
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="mt-6 text-lg text-gray-700">
            <p>{post.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white shadow-lg p-6">
          {/* Search Input */}
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search recent posts..."
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* About Us Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">About Us</h3>
            <p className="text-gray-600">
              We are a passionate team of writers delivering valuable content to our readers.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href={links?.facebook || "https://facebook.com"}  // Dynamic link for Facebook
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-3 rounded-full text-white shadow-md hover:bg-blue-700 flex items-center justify-center"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
              </a>
              <a
                href={links?.twitter || "https://twitter.com"}  // Dynamic link for Twitter
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 p-3 rounded-full text-white shadow-md hover:bg-blue-600 flex items-center justify-center"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i> {/* Twitter Icon */}
              </a>
              <a
                href={links?.instagram || "https://instagram.com"}  // Dynamic link for Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full text-white shadow-md hover:bg-pink-700 flex items-center justify-center"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i> {/* Instagram Icon */}
              </a>
              <a
                href={links?.youtube || "https://youtube.com"}  // Dynamic link for YouTube
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-full text-white shadow-md hover:bg-red-800 flex items-center justify-center"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i> {/* YouTube Icon */}
              </a>
              <a
                href={links?.linkedin || "https://linkedin.com"}  // Dynamic link for LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-3 rounded-full text-white shadow-md hover:bg-blue-900 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>



          {/* Recent Posts Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Recent Posts</h3>
            <ul className="space-y-2">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((recentPost) => (
                  <li key={recentPost._id}>
                    <a
                      href={`/blog/${recentPost._id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {recentPost.title}
                    </a>
                  </li>
                ))
              ) : (
                <li>No recent posts available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
