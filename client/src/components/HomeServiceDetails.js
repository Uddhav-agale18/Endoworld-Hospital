import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const HomeServiceDetails = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details by ID
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`/api/home-service-items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.homeTitle}</h1>
        <p className="text-gray-600 mb-6">{item.homeDescription}</p>
        <div className="text-sm text-gray-500">
          <strong>Service:</strong> {item.homeServiceId?.serviceName || 'N/A'}
        </div>
      </div>
    </section>
  );
};

export default HomeServiceDetails;
