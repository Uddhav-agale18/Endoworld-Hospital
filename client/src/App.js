import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import Contact from './components/Contact';
import TermsCondition from './components/TermsCondition';

// Admin Panel
import MainContent from './adminPanel/MainContent';
import Dashboard from './adminPages/Dashboard';
import Profile from './adminPages/Profile';
import Settings from './adminPages/settings/Settings';
import UploadLogo from './adminPages/logo/UploadLogo';
import UpdateLogoName from './adminPages/logo/UpdateLogoName';
import UploadSlider from './adminPages/slider/UploadSlider';
import AdminAbout from './adminPages/about/AdminAbout';
import UploadAboutImage from './adminPages/about/UploadAboutImage';
import UploadGallery from './adminPages/gallery/UploadGallery';
import Contacts from './adminPages/contacts/Contacts';
import Testimonial from './adminPages/testimonials/Testimonial';

// Context Providers
import { VisibilityProvider } from './VisibilityContext';
import { ColorProvider } from './ColorContext';

// General Components
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import SocialMediaLinks from './adminPages/socialMedia/SocialMediaLinks';
import DoctorStaff from './adminPages/doctorStaff/DoctorStaff';
import Blogs from './components/Blogs';
import ICSI from './components/services/ICSI';
import LabourAnalgesia from './components/services/LabourAnalgesia';
import Laparoscopy from './components/services/Laparoscopy';
import MedicineAndICU from './components/services/MedicineAndICU';
import NICU from './components/services/NICU';
import CasualtyAndOrthopaedic from './components/services/CasualtyAndOrthopaedic.js';
import MaleInfertility from './components/FAQs/MaleInfertility.js';
import Infertility from './components/FAQs/Infertility.js';
import FemaleInfertility from './components/FAQs/FemaleInfertility.js';
import Hysteroscopy from './components/FAQs/Hysteroscopy.js';
import IVF from './components/services/IVF.js';
import PageNotFound from './components/PageNotFound.js';  // Import the PageNotFound component
import BlogList from './adminPages/blog/BlogList.js';
import BlogDetail from './components/BlogDetail.js';
import Map from './adminPages/map/Map.js';
import BookAppointment from './components/BookAppointment.js';
import OurDoctors from './components/About Us/OurDoctors.js';
import ManagementTeam from './components/About Us/ManagementTeam.js';
import ConsultingTime from './components/About Us/ConsultingTime.js';
import AdminHysteroscopy from './adminPages/faq/Hysteroscopy/AdminHysteroscopy.js';
import AdminInfertility from './adminPages/faq/Infertility/AdminInfertility.js';
import AdminFemaleInfertility from './adminPages/faq/FemaleInfertility/AdminFemaleInfertility.js';
import AdminMaleinfertility from './adminPages/faq/MaleInfertility/AdminMaleInfertility.js';
import Services from './adminPages/services/Service.js'
import ServiceItem from './adminPages/services/ServiceItem.js';
import Navbar from './components/Navbar.js';
import ServiceDetails from './components/ServiceDetails.js';
import HomeService from './adminPages/homeService/HomeService.js';
import HomeServiceItem from './adminPages/homeService/HomeServiceItem.js';
import HomeServiceDetails from './components/HomeServiceDetails.js';
import AdminLogin from './adminPages/adminLogin/AdminLogin';

// Private Route Component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check admin authentication
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Conditional rendering for Header and Footer
  const showHeaderFooter = !isAdminRoute && location.pathname !== '*';

  return (
    <div className="App">
      {/* Render Header and Footer only for non-PageNotFound and non-Admin routes */}
      {showHeaderFooter && <Header />}

      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/gallery/photo" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/service-item/:id" element={<HomeServiceDetails />} />

        {/* FAQ Routes */}
        <Route path="/male-infertility" element={<MaleInfertility />} />
        <Route path="/infertility" element={<Infertility />} />
        <Route path="/female-infertility" element={<FemaleInfertility />} />
        <Route path="/hysteroscopy" element={<Hysteroscopy />} />

        {/* About us */}
        <Route path="/our-doctors" element={<OurDoctors />} />
        <Route path="/management-team" element={<ManagementTeam />} />
        <Route path="/timings" element={<ConsultingTime />} />

        {/* Services */}
        <Route path="/ivf-treatment" element={<IVF />} />
        <Route path="/icsi-treatment" element={<ICSI />} />
        <Route path="/labour-analgesia" element={<LabourAnalgesia />} />
        <Route path="/laparoscopy" element={<Laparoscopy />} />
        <Route path="/medicine-icu" element={<MedicineAndICU />} />
        <Route path="/nicu" element={<NICU />} />
        <Route path="/casualty-orthopaedic" element={<CasualtyAndOrthopaedic />} />

  {/* Admin Login Route */}
  <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<PrivateRoute><MainContent /></PrivateRoute>}>
          {/* Admin Protected Routes */}
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logo" element={<UploadLogo />} />
          <Route path="logo-name" element={<UpdateLogoName />} />
          <Route path="slider" element={<UploadSlider />} />
          <Route path="image" element={<UploadAboutImage />} />
          <Route path="details" element={<AdminAbout />} />
          <Route path="gallery" element={<UploadGallery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="add-review" element={<Testimonial />} />
          <Route path="social-media" element={<SocialMediaLinks />} />
          <Route path="doctor-staff" element={<DoctorStaff />} />
          <Route path="blogList" element={<BlogList />} />
          <Route path="map" element={<Map />} />
          <Route path="male-fertility" element={<AdminMaleinfertility />} />
          <Route path="female-fertility" element={<AdminFemaleInfertility />} />
          <Route path="fertility" element={<AdminInfertility />} />
          <Route path="hysteroscopy" element={<AdminHysteroscopy />} />
          <Route path="services" element={<Services />} />
          <Route path="service-item" element={<ServiceItem />} />
          <Route path="home-service" element={<HomeService />} />
          <Route path="home-service-item" element={<HomeServiceItem />} />
        </Route>
        {/* Catch-All Route */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Catch-all route for 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <VisibilityProvider>
        <ColorProvider>
          <App />
        </ColorProvider>
      </VisibilityProvider>
    </Router>
  );
}
