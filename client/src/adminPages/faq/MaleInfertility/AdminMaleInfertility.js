import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createMaleFertility,
  updateMaleFertility,
  fetchAllMaleFertility,
  deleteMaleFertility,
} from '../MaleInfertility/maleInFertilitySlice';
import Swal from 'sweetalert2';

const AdminMaleinfertility = () => {
  const [formData, setFormData] = useState({ title: '', subTitle: '', description: '' });
  const [editingId, setEditingId] = useState(null); // Tracks the record being edited
  const dispatch = useDispatch();
  const records = useSelector((state) => state.maleFertility.records);

  useEffect(() => {
    dispatch(fetchAllMaleFertility());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Dispatch update action
      dispatch(updateMaleFertility({ id: editingId, updatedData: formData }));
    } else {
      // Dispatch create action
      dispatch(createMaleFertility(formData));
    }
    // Reset form after submission
    setFormData({ title: '', subTitle: '', description: '' });
    setEditingId(null);
  };

  const handleEdit = (record) => {
    setFormData(record);
    setEditingId(record._id); // Set editing ID
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMaleFertility(id));
        Swal.fire('Deleted!', 'The record has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
          {editingId ? 'Edit Male Infertility Record' : 'Add Male Infertility Record'}
        </h2>
        <div className="space-y-2">
          <label htmlFor="title" className="block font-medium text-gray-600">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subTitle" className="block font-medium text-gray-600">Subtitle</label>
          <input
            id="subTitle"
            type="text"
            name="subTitle"
            placeholder="Subtitle"
            value={formData.subTitle}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="block font-medium text-gray-600">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          {editingId ? 'Update' : 'Create'}
        </button>
      </form>

      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Subtitle</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}>
              <td className="py-3 px-4">{record.title}</td>
              <td className="py-3 px-4">{record.subTitle}</td>
              <td className="py-3 px-4">{record.description}</td>
              <td className="py-3 px-4 space-x-2">
                <button
                  onClick={() => handleEdit(record)}
                  className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(record._id)}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMaleinfertility;
