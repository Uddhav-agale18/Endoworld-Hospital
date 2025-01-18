import { configureStore } from '@reduxjs/toolkit';
import logoReducer from './adminPages/logo/logoSlice';
import sliderReducer from './adminPages/slider/SliderSlice';
import aboutReducer from './adminPages/about/aboutSlice';
import aboutImageReducer from './adminPages/about/aboutImageSlice';
import logoNameReducer from './adminPages/logo/logoNameSlice';
import galleryReducer from './adminPages/gallery/gallerySlice'
import contactReducer from './adminPages/contacts/contactSlice'
import testimonialReducer from './adminPages/testimonials/TestimonialSlice'
import socialMediaReducer from './adminPages/socialMedia/socialMediaSlice';
import doctorStaffReducer from './adminPages/doctorStaff/doctorStaffSlice';
import blogReducer from './adminPages/blog/blogSlice';
import mapReducer from './adminPages/map/mapSlice';
import maleFertilityReducer from './adminPages/faq/MaleInfertility/maleInFertilitySlice';
import femaleFertilityReducer from './adminPages/faq/FemaleInfertility/femaleInfertilitySlice';
import infertilityReducer from './adminPages/faq/Infertility/InfertilitySlice';
import hysteroscopyReducer from './adminPages/faq/Hysteroscopy/hysteroscopySlice';
import serviceReducer from './adminPages/services/serviceSlice';
import serviceItemReducer from './adminPages/services/serviceItemSlice';
import homeServiceReducer from './adminPages/homeService/HomeServiceSlice';
import homeServiceItemReducer from './adminPages/homeService/HomeServiceItemSlice'
import adminReducer from './adminPages/adminLogin/adminSlice'
const store = configureStore({
  reducer: {
    logo: logoReducer,
    slider: sliderReducer,
    about: aboutReducer,
    aboutImage: aboutImageReducer,
    logoName: logoNameReducer,
    gallery: galleryReducer,
    contact: contactReducer,
    testimonials: testimonialReducer,
    socialMedia: socialMediaReducer,
    doctorStaff: doctorStaffReducer,
    blogs: blogReducer,
    map: mapReducer,
    maleFertility: maleFertilityReducer,
    femaleFertility: femaleFertilityReducer,
    infertility: infertilityReducer,
    hysteroscopy: hysteroscopyReducer,
    services: serviceReducer,
    serviceItems: serviceItemReducer,
    homeServices: homeServiceReducer,
    homeServiceItems: homeServiceItemReducer,
    admin: adminReducer,

  },
});

export default store;
