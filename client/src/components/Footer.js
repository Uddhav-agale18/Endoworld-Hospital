import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogos } from '../adminPages/logo/logoSlice'; // Assuming this is your action to fetch logos
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useColor } from '../ColorContext';
import { fetchContact } from '../adminPages/contacts/contactSlice';
import { FiPhone, FiMail } from "react-icons/fi";
import BACKEND_URL from '../backendApi';
const Footer = () => {
  const { footerColor } = useColor();
  const dispatch = useDispatch();
  const { logos, loading, error } = useSelector((state) => state.logo);
  const { contact } = useSelector((state) => state.contact);
  const links = useSelector((state) => state.socialMedia.links);

  useEffect(() => {
    dispatch(fetchContact());  // Fetch contact details when the component mounts
  }, [dispatch]);
  // State for the inquiry form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('All fields are required!');
      return;
    }
    setFormError('');
    // You can add your form submission logic here (e.g., call an API)
    alert('Inquiry submitted successfully!');
  };

  // Fetch logos when the component mounts
  useEffect(() => {
    dispatch(fetchLogos());
  }, [dispatch]);

  return (
    <footer className="text-white py-8" style={{ backgroundColor: footerColor }}>
      <div className="max-w-screen-xl mx-auto px-6 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          {loading && <p>Loading logo...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {logos.length > 0 && (
            <div className="h-6 sm:h-6 md:h-7 rounded-full mb-4">
              <img
                src={`${BACKEND_URL}/uploads/${logos[0].logo}`}
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          )}
          <p className="text-sm text-white max-w-xs leading-relaxed">
            We provide world class quality & safety in surgery for women, with less pain, less bleeding and one day stay. Our Mission is to fulfill the dream of each couple on the earth of having their own child.

            We have the team of highly qualified doctors, they have dedicated their lives to the field of endoscopy and reproductive medicine. We Providing International quality of facilities, equipment and expertise.          </p>
        </div>

         {/* Social Media Links */}
         <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold mb-4 text-yellow-500 ">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Facebook Icon */}
            <div className="p-3 border-2 border-white rounded-full hover:border-yellow-400 transition">
              <a
                href={links?.facebook || "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>

            {/* Instagram Icon */}
            <div className="p-3 border-2 border-white rounded-full hover:border-yellow-400 transition">
              <a
                href={links?.instagram || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            {/* YouTube Icon */}
            <div className="p-3 border-2 border-white rounded-full hover:border-yellow-400 transition">
              <a
                href={links?.youtube || "https://youtube.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>

            {/* LinkedIn Icon */}
            <div className="p-3 border-2 border-white rounded-full hover:border-yellow-400 transition">
              <a
                href={links?.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>



        {/* Quick Links */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500 ">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="hover:text-yellow-400 transition relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-400 transition relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-yellow-400 transition relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-yellow-400 transition relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/terms-and-condition"
                className="hover:text-yellow-400 transition relative group"
              >
                Terms & Conditions
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className=" p-0">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact US</h3>
          <div className="text-white text-md space-y-4">
            <div className="flex items-start">
              <span className="text-yellow-400 mr-2">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p>
              IVF Center in Aurangabad ENDOWORLD HOSPITAL # 723, In front of Airport, Chikalthana, Aurangabad – 431007, Maharashtra, India.
              </p>
                          </div>
            <div className="text-white text-sm space-y-4">
              {contact ? (
                <>
                  <div className="flex items-center justify-center text-lg">
                    <FiPhone className="mr-2 text-amber-200" />
                    <span>{contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center text-lg">
                    <FiMail className="mr-2 text-amber-200" />
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
      {/* Inquiry Form Section */}
      <div className=" p-6 flex justify-center items-center">
        <div className="w-full max-w-md">
          <h3 className="text-lg font-semibold text-yellow-500  mb-4 text-center">Inquiry Now</h3>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {formError && <p className="text-red-500 text-center">{formError}</p>}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-2 text-sm rounded border border-gray-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-2 text-sm rounded border border-gray-300"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full p-2 text-sm rounded border border-gray-300"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="3"
                className="w-full p-2 text-sm rounded border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition text-sm"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-4 text-center mt-2">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Love & Care By “HMA”–Healthcare Marketing Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
