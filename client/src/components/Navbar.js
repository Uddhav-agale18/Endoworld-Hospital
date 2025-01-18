import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServices } from '../adminPages/services/serviceSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { services, status, error } = useSelector((state) => state.serviceItems);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <nav className="bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li className="relative group">
          <button className="hover:text-gray-400 focus:outline-none">
            Services
          </button>
          <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-white shadow-md rounded mt-0 w-40 z-10">
            {status === 'loading' && <li className="px-4 py-2">Loading...</li>}
            {status === 'failed' && <li className="px-4 py-2 text-red-500">Error loading services</li>}
            {services && services.length > 0 ? (
              services.map((service) => (
                <li key={service._id} className="px-4 py-2 hover:bg-gray-600">
                  <Link to={`/services/${service._id}`} className="block">
                    {service.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-400">No services available</li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
