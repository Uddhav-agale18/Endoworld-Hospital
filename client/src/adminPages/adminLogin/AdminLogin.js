import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../adminLogin/adminSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2 for alerts

const AdminLogin = () => {
  const dispatch = useDispatch();
  const { isLoading, error, token } = useSelector((state) => state.admin);  // Access the token from the state
  const navigate = useNavigate(); // Used for navigation to the admin panel

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(formData)); // Dispatch login action
  };

  useEffect(() => {
    if (token) {
      // Display a success alert when login is successful
      Swal.fire({
        title: 'Success!',
        text: 'You are logged in as Admin.',
        icon: 'success',
        confirmButtonText: 'Okay',
      }).then(() => {
        // Redirect to the admin panel after the alert
        navigate('/admin/');
      });
    } else {
      // If no token, reset form data
      setFormData({
        email: '',
        password: '',
      });
    }
  }, [token, navigate]); // Trigger on token change (either set or removed)
  
  // Handle going back to the home page
  const handleGoBack = () => {
    navigate('/');  // Navigate to home page
  };

  return (
    <div className="container mt-5 p-4 shadow-lg rounded-lg bg-white max-w-md mx-auto">
      <h2 className="text-center mb-4 text-2xl font-bold text-primary">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="form-label text-lg">Email address</label>
          <input
            type="email"
            className="form-control border rounded p-2 w-full"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label text-lg">Password</label>
          <input
            type="password"
            className="form-control border rounded p-2 w-full"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="alert alert-danger text-red-500">{error}</div>}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Go back button */}
      <button
        type="button"
        onClick={handleGoBack}
        className="w-full mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
      >
        Go Back to Home Page
      </button>
    </div>
  );
};

export default AdminLogin;
