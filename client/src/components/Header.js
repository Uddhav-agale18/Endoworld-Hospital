import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiMail,
  FiPhone,
  FiSearch,
  FiUser,
  FiHome,
  FiGlobe,

} from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../images/logo.webp";
import { fetchContact } from '../adminPages/contacts/contactSlice';
import { useColor } from '../ColorContext';
import { fetchServices } from '../adminPages/services/serviceSlice'; // Action to fetch services
import BACKEND_URL from "../backendApi";
const Header = ({ backgroundColor }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [dropdownStates, setDropdownStates] = useState({});
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { contact } = useSelector((state) => state.contact);
  const { headerColor } = useColor();
  const { logos, loading, error } = useSelector((state) => state.logo);
  const { services, status } = useSelector((state) => state.services); // Assuming services are stored in state.services
  const links = useSelector((state) => state.socialMedia.links);

  // Fetch services when component mounts
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Prepare the dynamic dropdown items for "Our Services"
  const ourServicesDropdownItems = services.map((service) => ({
    to: `/service/${service._id}`, // Assuming each service has a unique _id
    label: service.name, // Use service name in dropdown
  }));

  useEffect(() => {
    dispatch(fetchContact());  // Fetch contact details when the component mounts
  }, [dispatch]);

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    alert(`Language switched to ${e.target.value}`);
  };

  return (
    // <header className="bg-red-950 text-white">
    <header
      className="text-white"
      style={{ backgroundColor: backgroundColor || headerColor }} // Default color if none selected
    >
      {/* Top Bar (for small and large screens) */}
      <div className="flex justify-between items-center px-4 py-3 lg:px-6 lg:py-4 bg-gray-800" style={{ backgroundColor: backgroundColor || headerColor }} >
        {/* Social Media Links */}
        <div className="flex space-x-4 text-xs">
          {/* Facebook Icon */}
          <div className="p-2 border-2 border-white rounded-full hover:border-blue-700 transition-all">
            <a
              href={links?.facebook || "https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg" />
            </a>
          </div>

          {/* Instagram Icon */}
          <div className="p-2 border-2 border-white rounded-full hover:border-yellow-400 transition">
            <a
              href={links?.instagram || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>

          {/* YouTube Icon */}
          <div className="p-2 border-2 border-white rounded-full hover:border-yellow-400 transition">
            <a
              href={links?.youtube || "https://youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
              aria-label="YouTube"
            >
              <FaYoutube className="text-lg" />
            </a>
          </div>

          {/* LinkedIn Icon */}
          <div className="p-2 border-2 border-white rounded-full hover:border-yellow-400 transition">
            <a
              href={links?.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>


        {/* Contact Info */}
        <div className="hidden lg:flex flex-col space-y-1">
          {contact && (
            <>
              <span className="flex items-center text-sm text-white">
                <FiPhone className="mr-2 text-amber-200" />
                {contact.email}
              </span>
              <span className="flex items-center text-sm text-white">
                <FiMail className="mr-2 text-amber-200" />
                {contact.phone}
              </span>
            </>
          )}
        </div>

        {/* Login and Book Appointment Buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Search Section */}
          <div className="relative hidden md:flex space-x-2 mr-8">
            {/* Search Icon */}
            <FiSearch
              className={`absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer ${isOpen ? 'text-white' : 'text-amber-200'}`}
              onClick={() => setIsOpen(!isOpen)} // Toggle input field visibility on click
              style={{ fontSize: '1.25rem' }} // Adjusted size of the icon
            />

            {/* Input Field that shows when isOpen is true */}
            {isOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1 w-40 rounded-full text-gray-700 focus:outline-none focus:ring focus:ring-yellow-400 mb-5 absolute right-0 top-full"
              />
            )}
          </div>

          {/* Language Selector Section */}
          <div className="relative flex items-center space-x-2">
            {/* Language Dropdown */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="text-blue-500 border border-blue-500 px-3 py-1.5 rounded-full focus:outline-none pl-10 pr-3 hover:border-gray-400 transition duration-300 bg-transparent text-sm"
            >
              <option value="English">English</option>
              <option value="Marathi">Marathi</option>
              <option value="Hindi">Hindi</option>
            </select>

            {/* Globe Icon */}
            <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-base" />
          </div>

          {/* Login Button */}
          <button className="text-blue-500 border border-blue-500 px-3 py-1.5 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 flex items-center text-sm">
            <FiUser className="mr-2 text-sm" />
            Login
          </button>

          {/* Book Appointment Button */}
          <Link
            to="/appointment"
            className="text-yellow-500 border border-yellow-500 px-3 py-1.5 rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 flex items-center text-sm"
          >
            <AiOutlineCalendar className="mr-2 text-sm" />
            Book Appointment
          </Link>


        </div>

        {/* Appointment and Login Icons for Small Screens */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Appointment Icon with Tooltip */}
          <div className="relative group">
            <Link
              to="/appointment"
              className="p-2 rounded-full text-white hover:text-yellow-500 border-2 border-yellow-600 flex items-center justify-center"
            >
              <AiOutlineCalendar className="text-xl" />
            </Link>
          </div>

          {/* Login Icon */}
          <button className="text-blue-500 px-2 py-2 rounded-lg hover:bg-gray-200 flex items-center text-lg">
            <FiUser className="mr-1 text-xl" />
            <span className="text-sm hidden sm:inline-block">Login</span>
          </button>
        </div>
      </div>



      {/* Main Header (for all screens) */}
      <div className="flex justify-between items-center px-4 py-3 lg:px-6 lg:py-4 bg-white">
        {/* Sidebar Icon (visible only on small screens) */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center p-3 rounded-full bg-yellow-200 text-black hover:bg-yellow-300 ml-4"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>

        {/* Logo (on the right for small screens) */}
        <div className="flex items-center space-x-4">
          {loading && <p>Loading logo...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {logos.length > 0 && (
            <div className="h-6 sm:h-6 md:h-8 rounded-full mb-2 ml-auto  lg:ml-10">
              {/* Apply margin-left only on small screens */}
              <Link to="/" className="w-full h-full">
                <img
                  src={`${BACKEND_URL}/uploads/${logos[0].logo}`}
                  alt="Logo"
                  className="w-full h-full object-cover mr-8"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Navigation Links (for large screens) */}
        <div className="hidden md:flex items-center space-x-8 mr-5">
          {[
            {
              label: 'FAQ',
              dropdown: true,
              dropdownItems: [
                { to: '/male-infertility', label: 'MALE INFERTILITY FAQ' },
                { to: '/female-infertility', label: 'FEMALE INFERTILITY' },
                { to: '/infertility', label: 'INFERTILITY' },
                { to: '/hysteroscopy', label: 'HYSTEROSCOPY' },
              ],
            },
            {
              label: 'Gallery',
              dropdown: true,
              dropdownItems: [
                { to: '/gallery/photo', label: 'PHOTO Gallery' },
              ],
            },
            {
              label: 'About Us',
              dropdown: true,
              dropdownItems: [
                { to: '/our-doctors', label: 'OUR DOCTORS' },
                { to: '/management-team', label: 'MANAGEMENT TEAM' },
                { to: '/timings', label: 'DOCTORS CONSULTATION TIMINGS' },
              ],
            },
            // "Our Services" with dynamic dropdown items
            {
              label: 'Our Services',
              dropdown: true,
              dropdownItems:
                status === 'loading'
                  ? [{ to: '#', label: 'Loading...' }]
                  : status === 'failed'
                    ? [{ to: '#', label: 'Error loading services' }]
                    : services && services.length > 0
                      ? services.map((service) => ({
                        to: `/services/${service._id}`,
                        label: service.name,
                      }))
                      : [{ to: '#', label: 'No services available' }],
            },
            { to: '/blogs', label: 'Blogs' },
            { to: '/contact', label: 'Contact Us' },
          ].map(({ to, label, dropdown, dropdownItems }) => (
            <div
              key={label}
              className="relative group"
              onMouseEnter={(e) => e.currentTarget.classList.add('show')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('show')}
            >
              {/* Main Link */}
              {!dropdown && (
                <Link
                  to={to}
                  className="text-gray-800 hover:text-red-500 text-md font-medium font-custom relative transition-all duration-300"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300"></span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {dropdown && (
                <>
                  <span
                    className="text-gray-800 hover:text-red-500 text-md font-medium font-custom relative transition-all duration-300 cursor-pointer"
                  >
                    {label}
                    <span className="ml-1 text-gray-500">↓</span>
                  </span>
                  <div
                    className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-0 w-52 z-10 mr-32 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:visible"
                  >
                    <ul className="py-2">
                      {dropdownItems.map(({ to, label }, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <Link to={to} className="block text-gray-700 hover:text-red-500">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar (for mobile view) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 bg-blue-300 h-full z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>

          {/* Sidebar Links */}
          {[
            { to: '/', label: 'Home' },
            {
              label: 'FAQ',
              dropdown: true,
              dropdownItems: [
                { to: '/male-infertility', label: 'MALE INFERTILITY FAQ' },
                { to: '/female-infertility', label: 'FEMALE INFERTILITY' },
                { to: '/infertility', label: 'INFERTILITY' },
                { to: '/hysteroscopy', label: 'HYSTEROSCOPY' },
              ],
            },
            {
              label: 'Gallery',
              dropdown: true,
              dropdownItems: [
                { to: '/gallery/photo', label: 'PHOTO Gallery' },
              ],
            },
            {
              label: 'About Us',
              dropdown: true,
              dropdownItems: [
                { to: '/our-doctors', label: 'OUR DOCTORS' },
                { to: '/management-team', label: 'MANAGEMENT TEAM' },
                { to: '/timings', label: 'DOCTORS CONSULTATION TIMINGS' },
              ],
            },
            {
              label: 'Our Services',
              dropdown: true,
              dropdownItems:
                status === 'loading'
                  ? [{ to: '#', label: 'Loading...' }]
                  : status === 'failed'
                    ? [{ to: '#', label: 'Error loading services' }]
                    : services && services.length > 0
                      ? services.map((service) => ({
                        to: `/services/${service._id}`,
                        label: service.name,
                      }))
                      : [{ to: '#', label: 'No services available' }],
            },
            { to: '/blogs', label: 'Blogs' },
            { to: '/contact', label: 'Contact Us' },
          ].map(({ to, label, dropdown, dropdownItems }) => (
            <div
              key={label}
              className="relative group"
              onMouseEnter={(e) => e.currentTarget.classList.add('show')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('show')}
            >
              {/* Main Link */}
              {!dropdown && (
                <Link
                  to={to}
                  className="text-gray-800 hover:text-red-500 text-md font-medium font-custom relative transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)} // Close the sidebar on link click
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300"></span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {dropdown && (
                <>
                  <span
                    className="text-gray-800 hover:text-red-500 text-md font-medium font-custom relative transition-all duration-300 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)} // Close the sidebar when clicking on dropdown label
                  >
                    {label}
                    <span className="ml-1 text-gray-500">↓</span>
                  </span>
                  <div
                    className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md mt-0 w-52 z-10 mr-32 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:visible"
                  >
                    <ul className="py-2">
                      {dropdownItems.map(({ to, label }, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100">
                          <Link
                            to={to}
                            className="block text-gray-700 hover:text-red-500"
                            onClick={() => setIsMenuOpen(false)} // Close the sidebar on link click
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>






      {/* Bottom Navigation Bar for Small Screens */}
      <div className="fixed bottom-0 left-0 w-full bg-blue-400  shadow-lg lg:hidden flex justify-around items-center py-3 border-t border-gray-300">
        <Link
          to="/"
          className="flex flex-col items-center text-white hover:text-red-500"
        >
          <FiHome className="text-xl" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/search"
          className="flex flex-col items-center text-white hover:text-red-500"
        >
          <FiSearch className="text-xl" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          to="/appointment"
          className="flex flex-col items-center text-white hover:text-red-500"
        >
          <AiOutlineCalendar className="text-xl" />
          <span className="text-xs">Book Appointment</span>
        </Link>
        <Link
          to="/contact"
          className="flex flex-col items-center text-white hover:text-red-500"
        >
          <FiMail className="text-xl" />
          <span className="text-xs">Contact</span>
        </Link>
      </div>

    </header>
  );
};

export default Header;
