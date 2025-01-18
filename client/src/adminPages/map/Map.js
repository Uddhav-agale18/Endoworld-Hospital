import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMap, addMap, updateMap, deleteMap } from './mapSlice';

const Map = () => {
  const dispatch = useDispatch();
  const { map, loading, error } = useSelector((state) => state.map);

  const [link, setLink] = useState('');

  useEffect(() => {
    dispatch(fetchMap());
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    if (map) {
      dispatch(updateMap(link));
    } else {
      dispatch(addMap(link));
    }
    setLink('');
  };

  const handleDelete = () => {
    dispatch(deleteMap());
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dynamic Map Management</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Display Map */}
      {map && (
        <div className="mb-4">
          <iframe
            src={map.link}
            width="50%" // Make the map responsive
            height="200" // Adjust the height as needed
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md" // Optional: Add rounded corners
          ></iframe>
        </div>
      )}

      {/* Form */}
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter Map Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddOrUpdate}
        >
          {map ? 'Update Map' : 'Add Map'}
        </button>

        {map && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleDelete}
          >
            Delete Map
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;
