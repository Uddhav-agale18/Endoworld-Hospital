
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from '../adminPages/contacts/contactSlice';
import { FiPhone, FiMail } from "react-icons/fi";
import { fetchMap } from '../adminPages/map/mapSlice'
const Contact = () => {
  const dispatch = useDispatch();
  const { map, loading, error } = useSelector((state) => state.map);

  const { contact } = useSelector((state) => state.contact);
  useEffect(() => {
    dispatch(fetchMap());
    dispatch(fetchContact());  // Fetch contact details when the component mounts
  }, [dispatch]);

  return (
    <div className="contact-section py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">We are here to assist you. Please reach out with any questions or concerns!</p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h3>
            <div className="text-black text-md space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 mr-2">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>
              IVF Center in Aurangabad ENDOWORLD HOSPITAL # 723, In front of Airport, Chikalthana, Aurangabad – 431007, Maharashtra, India.
              </p>              </div>
              <div className="text-black text-sm space-y-4">
                {contact ? (
                  <>
                    <div className="flex items-center justify-center text-lg">
                      <FiPhone className="mr-2 text-red-600" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center text-lg">
                      <FiMail className="mr-2 text-red-600" />
                      <span>{contact.email}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-center">No contact information available.</p>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Find Us on the Map</h3>
          <div className="w-full h-80 bg-gray-300 rounded-lg">
            {/* Check if map link is available */}
            {loading && <p className="text-center">Loading Map...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {map ? (
              <iframe
                title="Dynamic Location"
                src={map.link} // Use the dynamic link from the Redux store
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            ) : (
              <p className="text-center text-gray-600">No map available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

