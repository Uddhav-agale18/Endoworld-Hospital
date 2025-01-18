import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import Slider from 'react-slick';
import Star from '../images/star3.png';
import { fetchSliderImages } from '../adminPages/slider/SliderSlice'; // Replace with actual action
import { fetchLogos } from '../adminPages/logo/logoSlice';
import { fetchAboutImages } from '../adminPages/about/aboutImageSlice';
import { fetchLogoName } from '../adminPages/logo/logoNameSlice'
import { fetchGalleryImages } from '../adminPages/gallery/gallerySlice'
import { useVisibility } from '../VisibilityContext';
import { Box, Typography } from '@mui/material';
import { fetchTestimonials } from '../adminPages/testimonials/TestimonialSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDoctorStaff } from '../adminPages/doctorStaff/doctorStaffSlice';
import { fetchHomeServices, fetchHomeServiceItems } from '../adminPages/homeService/HomeServiceItemSlice';
import { useNavigate } from 'react-router-dom';

import { List, ListItem, ListItemIcon } from '@mui/material';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BACKEND_URL from '../backendApi';

const Home = () => {
  const dispatch = useDispatch();

  // All hooks should be placed unconditionally
  const { images } = useSelector((state) => state.slider);
  const { aboutImages } = useSelector((state) => state.aboutImage);
  const { logoName } = useSelector((state) => state.logoName);
  const [about, setAbout] = useState(null);
  const { images: galleryImages, loading: galleryLoading } = useSelector(
    (state) => state.gallery
  );
  const { servicesVisible, brandsVisible, productsVisible } = useVisibility();
  const { testimonials, status } = useSelector((state) => state.testimonials);

  const [currentIndex, setCurrentIndex] = useState(0);
  const doctorStaff = useSelector((state) => state.doctorStaff.items);
  const navigate = useNavigate();
  const { services, items } = useSelector((state) => state.homeServiceItems);

  const [groupedItems, setGroupedItems] = useState({});

  // Fetch data in a single useEffect without conditionally calling it
  useEffect(() => {
    dispatch(fetchGalleryImages());
    dispatch(fetchLogoName());
    dispatch(fetchLogos());
    dispatch(fetchSliderImages());
    dispatch(fetchAboutImages());
    dispatch(fetchTestimonials());
    dispatch(fetchDoctorStaff());
    dispatch(fetchHomeServices());
    dispatch(fetchHomeServiceItems());

    const fetchData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/about`);
        if (!response.ok) {
          throw new Error("Failed to fetch about data");
        }
        const data = await response.json();
        console.log("Fetched about data:", data);
        setAbout(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (items.length) {
      const grouped = items.reduce((acc, item) => {
        const serviceId = item.homeServiceId._id;
        if (!acc[serviceId]) {
          acc[serviceId] = [];
        }
        acc[serviceId].push(item);
        return acc;
      }, {});
      setGroupedItems(grouped);
    }
  }, [items]);
  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);


  if (status === "loading") return <p>Loading testimonials...</p>;

  // Slide navigation logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-white">

      <div className="bg-gray-100 py-0 mt-0">

        {/* Slider Section */}
        <div className="relative w-full mt-0 overflow-hidden">
          {images.length ? (
            <>
              {/* Image Wrapper */}
              <div
                className="slider flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="slide min-w-full h-[400px] md:h-[600px] relative" // Adjust height for different screens
                    style={{ transition: 'transform 0.3s' }}
                  >
                    <img
                      src={`${BACKEND_URL}/uploads/${img.sliderImage}`}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                    />
                  </div>
                ))}
              </div>

              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black text-white text-lg md:text-2xl rounded-full p-2 md:p-3 opacity-50 hover:opacity-100 transition-opacity duration-300 z-10"
              >
                ❮
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black text-white text-lg md:text-2xl rounded-full p-2 md:p-3 opacity-50 hover:opacity-100 transition-opacity duration-300 z-10"
              >
                ❯
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500">No images to display</p>
          )}
        </div>



        {/* About Section */}
        <div className="max-w-screen-xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              {aboutImages.length > 0 ? (
                <div className="h-64 sm:h-80 md:h-96 rounded-lg mb-6">
                  <img
                    src={`${BACKEND_URL}/uploads/${aboutImages[0].aboutImage}`}
                    alt="About Image"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              ) : (
                <p className="text-center text-gray-500">No about image available</p>
              )}
            </div>

            {/* Text Section */}


            <div className="w-full md:w-1/2 md:ml-8 mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 underline">
                {about ? about.title : 'Loading...'}
              </h2>
              <p className="text-lg text-gray-700">
                {about ? about.description : 'Please wait while we fetch the data.'}
              </p> </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="max-w-screen-xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Vision Box */}
            <div className="w-full md:w-1/2 p-6 bg-blue-50 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM12 4a8 8 0 00-8 8 7.963 7.963 0 001.757 4.935M16.243 8.935a7.963 7.963 0 01-1.757-4.935" />
                </svg>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700">
                {about ? about.vision : 'Loading...'}
              </p>
            </div>

            {/* Mission Box */}
            <div className="w-full md:w-1/2 p-6 bg-green-50 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7M12 19V6" />
                </svg>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700">
                {about ? about.mission : 'Loading...'}
              </p>
            </div>

          </div>
        </div>

        <section className="py-12 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 font-sans">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-shadow duration-200 text-center"
              >
                <h3 className="text-xl py-2 font-semibold bg-blue-800 text-white mb-4">
                  {service.serviceName}
                </h3>
                <ul className="space-y-4">
                  {groupedItems[service._id]?.map((item) => (
                    <li
                      key={item._id}
                      className="flex items-center justify-center text-gray-700 hover:text-red-500  transition-colors duration-150 text-lg font-medium"
                    >
                      {/* Circle icon */}
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                      {item.homeTitle}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>





        <section className="py-12 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
            Our Professional Doctors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {doctorStaff.slice(0, 3).map((doctor) => (
              <div
                key={doctor._id}
                className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
              >
                <img
                  src={`http://localhost:5000${doctor.image}`}
                  alt={doctor.name}
                  className="w-36 h-36 rounded-full mb-4 object-cover"
                />
                <p className="text-xl font-semibold text-gray-800 text-center">{doctor.name}</p>
                <p className="text-sm text-gray-600 text-center">{doctor.education}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">What Our Users Say</h2>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {testimonials.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full mb-8">
                      <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">"{testimonial.feedback}"</p>
                      <h3 className="text-gray-800 font-bold text-right text-xl">{testimonial.name}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-gray-500 text-lg">No testimonials available.</p>
            )}
          </div>
        </section>

        <div className="p-6 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">Photo Gallery</h2>
          <Slider {...sliderSettings}>
            {galleryImages.map((image) => (
              <div key={image._id} className="p-2">
                <img
                  src={`${BACKEND_URL}/uploads/${image.galleryImage}`}
                  alt="gallery"
                  className="w-64 h-40 sm:w-72 sm:h-48 object-cover mx-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
      <a
        href="tel:+919422235934"
        className="fixed bottom-20 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center animate-bounce mb-10"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9422235934"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center animate-bounce mb-7"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  );
};

export default Home;
