import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries, createEntry, updateEntry, deleteEntry } from '../Hysteroscopy/hysteroscopySlice';
import Swal from 'sweetalert2';

const AdminHysteroscopy = () => {
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.hysteroscopy);
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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{editingId ? 'Edit' : 'Add'} Hysteroscopy</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          placeholder="Title"
        />
        <input
          type="text"
          name="subTitle"
          value={formData.subTitle}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          placeholder="Subtitle"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editingId ? 'Update' : 'Create'}
        </button>
      </form>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Subtitle</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id}>
                  <td className="px-4 py-2 border">{entry.title}</td>
                  <td className="px-4 py-2 border">{entry.subTitle}</td>
                  <td className="px-4 py-2 border">{entry.description}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleEdit(entry)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry._id)}
                      className="ml-2 text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
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

export default AdminHysteroscopy;
