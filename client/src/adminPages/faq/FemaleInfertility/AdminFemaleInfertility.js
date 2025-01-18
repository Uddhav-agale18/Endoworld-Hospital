import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} from '../../faq/FemaleInfertility/femaleInfertilitySlice';
import Swal from 'sweetalert2';

const AdminFemaleInfertility = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.femaleFertility);
  const [formData, setFormData] = useState({ title: '', subTitle: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateEntry({ id: editingId, updatedEntry: formData }));
    } else {
      dispatch(createEntry(formData));
    }
    setFormData({ title: '', subTitle: '', description: '' });
    setEditingId(null);
  };

  const handleEdit = (entry) => {
    setFormData(entry);
    setEditingId(entry._id);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteEntry(id));
        Swal.fire('Deleted!', 'The entry has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {editingId ? 'Edit' : 'Add'} Female Infertility 
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700" htmlFor="subTitle">Subtitle</label>
          <input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            placeholder="Subtitle"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {editingId ? 'Update' : 'Create'} 
        </button>
      </form>

      {/* Display Entries */}
      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 text-sm font-semibold text-gray-600">Title</th>
                <th className="py-2 px-4 text-sm font-semibold text-gray-600">Subtitle</th>
                <th className="py-2 px-4 text-sm font-semibold text-gray-600">Description</th>
                <th className="py-2 px-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{entry.title}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{entry.subTitle}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{entry.description}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(entry)}
                        className="text-blue-500 hover:text-blue-600 font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(entry._id)}
                        className="text-red-500 hover:text-red-600 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default AdminFemaleInfertility;
