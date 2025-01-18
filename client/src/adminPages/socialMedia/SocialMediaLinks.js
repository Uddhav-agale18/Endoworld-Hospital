import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSocialMediaLinks, updateSocialMediaLinks, addSocialMediaLinks, deleteSocialMediaLinks } from '../socialMedia/socialMediaSlice';

const SocialMediaLinks = () => {
  const dispatch = useDispatch();
  const { links, status, error } = useSelector((state) => state.socialMedia);
  const [formData, setFormData] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
  });

  useEffect(() => {
    dispatch(getSocialMediaLinks());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSocialMediaLinks(formData));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addSocialMediaLinks(formData));
  };

  const handleDelete = () => {
    dispatch(deleteSocialMediaLinks());
  };

  if (status === 'loading') {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Social Media Links</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleInputChange}
            placeholder="Facebook Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
            placeholder="Twitter Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleInputChange}
            placeholder="Instagram Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <input
            type="text"
            name="youtube"
            value={formData.youtube}
            onChange={handleInputChange}
            placeholder="YouTube Link"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-between space-x-4">
          <button 
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Update Links
          </button>
          
          <button
            onClick={handleDelete}
            className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Delete Links
          </button>
        </div>
      </form>

      {links && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Current Links</h2>
          <ul className="space-y-2">
            <li className="text-lg">Facebook: <a href={links.facebook} className="text-blue-600">{links.facebook}</a></li>
            <li className="text-lg">Twitter: <a href={links.twitter} className="text-blue-400">{links.twitter}</a></li>
            <li className="text-lg">Instagram: <a href={links.instagram} className="text-pink-500">{links.instagram}</a></li>
            <li className="text-lg">YouTube: <a href={links.youtube} className="text-red-500">{links.youtube}</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialMediaLinks;
