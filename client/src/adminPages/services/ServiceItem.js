import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, addServiceItem, fetchServiceItems, updateServiceItem, deleteServiceItem } from '../services/serviceItemSlice';

const ServiceItem = () => {
  const dispatch = useDispatch();
  const { services, items, status, error } = useSelector((state) => state.serviceItems);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    serviceId: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchServiceItems());
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
      dispatch(updateServiceItem({ ...formData, _id: editingItemId }));
    } else {
      // Handle add new item
      dispatch(addServiceItem(formData));
    }
    resetForm();
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      description: item.description,
      serviceId: item.serviceId._id,
    });
    setIsEditing(true);
    setEditingItemId(item._id);
  };

  const handleDelete = (id) => {
    dispatch(deleteServiceItem(id));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      serviceId: '',
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
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700">Service</label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a service</option>
            {services &&
              services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
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
            {items.map((item) => {
              console.log(item); // Add this line to inspect each item
              return (
                <tr key={item._id} className="border-b">
                  <td className="px-6 py-3">{item.title}</td>
                  <td className="px-6 py-3">{item.description}</td>
                  <td className="px-6 py-3">{item.serviceId ? item.serviceId.name : 'N/A'}</td>
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
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ServiceItem;
