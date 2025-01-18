import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctorStaff, addDoctorStaff, editDoctorStaff, deleteDoctorStaff } from './doctorStaffSlice';

const DoctorStaff = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const dispatch = useDispatch();
  const doctorStaff = useSelector((state) => state.doctorStaff.items);

  useEffect(() => {
    dispatch(fetchDoctorStaff());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('education', education);
    formData.append('description', description);
    if (image) formData.append('image', image);

    if (currentDoctor) {
      dispatch(editDoctorStaff({ id: currentDoctor._id, formData }));
    } else {
      dispatch(addDoctorStaff(formData));
    }

    setName('');
    setEducation('');
    setDescription('');
    setImage(null);
    setCurrentDoctor(null);
  };

  const handleEdit = (doctor) => {
    setCurrentDoctor(doctor);
    setName(doctor.name);
    setEducation(doctor.education);
    setDescription(doctor.description || '');
  };

  const handleDelete = (id) => {
    dispatch(deleteDoctorStaff(id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}>
          {currentDoctor ? 'Edit Doctor Staff' : 'Add Doctor Staff'}
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Education"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            resize: 'vertical',
          }}
        ></textarea>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#28a745',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          {currentDoctor ? 'Update' : 'Add'}
        </button>
      </form>

      <h2 style={{ marginBottom: '10px' }}>Doctor Staff List</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {doctorStaff.map((doctor) => (
          <li
            key={doctor._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={`http://localhost:5000${doctor.image}`}
              alt={doctor.name}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '5px',
                marginRight: '10px',
                objectFit: 'cover',
              }}
            />
            <div style={{ flex: '1' }}>
              <p style={{ margin: '0', fontWeight: 'bold' }}>{doctor.name}</p>
              <p style={{ margin: '0', color: '#555' }}>{doctor.education}</p>
              <p style={{ margin: '0', color: '#777' }}>{doctor.description}</p>
            </div>
            <button
              onClick={() => handleEdit(doctor)}
              style={{
                marginRight: '10px',
                padding: '5px 10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#ffc107',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(doctor._id)}
              style={{
                padding: '5px 10px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#dc3545',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorStaff;
