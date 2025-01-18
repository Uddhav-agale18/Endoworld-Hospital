import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchHomeServices,
  addHomeServiceItem,
  fetchHomeServiceItems,
  updateHomeServiceItem,
  deleteHomeServiceItem,
} from './HomeServiceItemSlice';

const HomeServiceItem = () => {
  const dispatch = useDispatch();
  const { services, items, status, error } = useSelector((state) => state.homeServiceItems);

  const [formData, setFormData] = useState({
    homeTitle: '',
    homeDescription: '',
    homeServiceId: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    dispatch(fetchHomeServices());
    dispatch(fetchHomeServiceItems());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Handle update
      dispatch(updateHomeServiceItem({ ...formData, _id: editingItemId }));
    } else {
      // Handle add new item
      dispatch(addHomeServiceItem(formData));
    }
    resetForm();
  };

  const handleEdit = (item) => {
    setFormData({
      homeTitle: item.homeTitle,
      homeDescription: item.homeDescription,
      homeServiceId: item.homeServiceId._id,
    });
    setIsEditing(true);
    setEditingItemId(item._id);
  };

  const handleDelete = (id) => {
    dispatch(deleteHomeServiceItem(id));
  };

  const resetForm = () => {
    setFormData({
      homeTitle: '',
      homeDescription: '',
      homeServiceId: '',
    });
    setIsEditing(false);
    setEditingItemId(null);
  };

  if (status === 'loading') return <div className="text-center py-5">Loading...</div>;
  if (status === 'failed') return <div className="text-center py-5 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isEditing ? 'Edit Service Item' : 'Add Service Item'}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="homeTitle" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="homeTitle"
            name="homeTitle"
            value={formData.homeTitle}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="homeDescription" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="homeDescription"
            name="homeDescription"
            value={formData.homeDescription}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="homeServiceId" className="block text-sm font-medium text-gray-700">Service</label>
          <select
            id="homeServiceId"
            name="homeServiceId"
            value={formData.homeServiceId}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a service</option>
            {services &&
              services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.serviceName}
                </option>
              ))}
          </select>
        </div>

        <button type="submit" className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none">
          {isEditing ? 'Update' : 'Add'} Item
        </button>
      </form>

      {/* Service Items List */}
      <h3 className="text-xl font-semibold mt-8">Service Items</h3>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Service</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {items.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-3">{item.homeTitle}</td>
                <td className="px-6 py-3">{item.homeDescription}</td>
                <td className="px-6 py-3">{item.homeServiceId ? item.homeServiceId.serviceName : 'N/A'}</td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-4 py-2 text-sm bg-yellow-400 text-white rounded-md shadow-sm hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-4 py-2 ml-2 text-sm bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeServiceItem;
