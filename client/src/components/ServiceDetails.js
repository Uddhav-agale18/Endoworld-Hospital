import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceItems } from '../adminPages/services/serviceItemSlice';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const dispatch = useDispatch();
  const { services, items, loading, error } = useSelector((state) => state.serviceItems);

  useEffect(() => {
    dispatch(fetchServiceItems());
  }, [dispatch]);

  const service = services.find((service) => service._id === serviceId);
  const filteredItems = items.filter((item) => item.serviceId._id === serviceId);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-600 py-8 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-white">
          {service ? service.name : 'Service Details'}
        </h1>
        <p className="text-center text-lg text-white mt-2">
          {service ? service.description : 'Explore our services in detail.'}
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        {loading ? (
          <div className="text-center text-xl text-gray-600">Loading...</div>
        ) : error ? (
          <div className="text-center text-xl text-red-500">Error: {error}</div>
        ) : service ? (
          <>
            {/* Service Details */}
            <section className="bg-white shadow-xl p-6 mb-6 rounded-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{service.name}</h2>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </section>

            {/* Service Items */}
            <section>
              <div className="space-y-4">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div
                      key={item._id}
                      className="bg-gray-100 shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-blue-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No items available for this service.</p>
                )}
              </div>
            </section>
          </>
        ) : (
          <div className="text-center text-xl text-gray-600">Service not found.</div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
