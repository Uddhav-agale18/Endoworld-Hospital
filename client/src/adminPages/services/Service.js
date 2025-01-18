import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchServices,
  addService,
  updateService,
  deleteService,
} from '../services/serviceSlice';

const Service = () => {
  const [name, setName] = useState('');
  const [editingService, setEditingService] = useState(null);
  const dispatch = useDispatch();
  const { services, status, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingService) {
      dispatch(updateService({ id: editingService._id, name }));
    } else {
      dispatch(addService({ name }));
    }

    setName('');
    setEditingService(null);
  };

  const handleEdit = (service) => {
    setName(service.name);
    setEditingService(service);
  };

  const handleDelete = (id) => {
    dispatch(deleteService(id));
  };

  const handleCancel = () => {
    setName('');
    setEditingService(null);
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Service Manager
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-gray-700"
          >
            Service Name
          </label>
          <input
            id="serviceName"
            type="text"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {editingService ? 'Update Service' : 'Add Service'}
          </button>
          {editingService && (
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Service List */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left py-3 px-4 font-semibold">Name</th>
              <th className="text-left py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service._id}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-3 px-4">{service.name}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Service;
