import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="bg-red-100 p-10 rounded-lg shadow-lg mb-6">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold text-center text-red-600">
          404 - Page Not Found
        </h1>
      </div>

      <p className="text-lg text-center mb-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
