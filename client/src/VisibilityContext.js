import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for managing visibility state
const VisibilityContext = createContext();

// Custom hook to use the VisibilityContext
export const useVisibility = () => {
  return useContext(VisibilityContext);
};

// VisibilityProvider component that provides visibility states and the toggle function
export const VisibilityProvider = ({ children }) => {
  // Get initial visibility states from localStorage, default to true if not set
  const [servicesVisible, setServicesVisible] = useState(() => localStorage.getItem('servicesVisible') !== 'false');
  const [brandsVisible, setBrandsVisible] = useState(() => localStorage.getItem('brandsVisible') !== 'false');
  const [productsVisible, setProductsVisible] = useState(() => localStorage.getItem('productsVisible') !== 'false');
  const [donateVisible, setDonateVisible] = useState(() => localStorage.getItem('donateVisible') !== 'false');

  // Toggle function to update visibility state and persist it in localStorage
  const toggleVisibility = (section) => {
    if (section === 'services') {
      const newState = !servicesVisible;
      setServicesVisible(newState);
      localStorage.setItem('servicesVisible', newState);
    }
    if (section === 'brands') {
      const newState = !brandsVisible;
      setBrandsVisible(newState);
      localStorage.setItem('brandsVisible', newState);
    }
    if (section === 'products') {
      const newState = !productsVisible;
      setProductsVisible(newState);
      localStorage.setItem('productsVisible', newState);
    }
    if (section === 'donate') {
      const newState = !donateVisible;
      setDonateVisible(newState);
      localStorage.setItem('donateVisible', newState);
    }
  };

  return (
    <VisibilityContext.Provider
      value={{
        servicesVisible,
        brandsVisible,
        productsVisible,
        donateVisible,
        toggleVisibility,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};
