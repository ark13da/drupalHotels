import React, { useState } from 'react';
import { HotelsContext } from '../contexts/contexts';
import hotels from '../assets/hotelData/hotels.json';

// a wrapper that passes data as global state to all of its children components and allows the children to modify the data
const HotelsProvider = ({ children }) => {
  const [country, setCountry] = useState('');
  const [availabilityCheck, setAvailabilityCheck] = useState(false);

  // select available hotels to be displayed only
  const toggleAvailibility = () => {
    setAvailabilityCheck(!availabilityCheck);
  };

  // select hotels of chosen country to be displayed only
  const selectCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        country,
        availabilityCheck,
        toggleAvailibility,
        selectCountry,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsProvider;
