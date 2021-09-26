import React, { useState, useEffect } from 'react';
import useHotel from '../../hooks/useHotel';
import Hotel from '../Hotel/Hotel';

const HotelList = () => {
  const context = useHotel();
  const [hotelList, setHotelList] = useState(context.hotels);

  useEffect(() => {
    setHotelList(context.hotels);
    if (context.country.length) {
      const filteredByCountry = context.hotels.filter(
        (hotel) => hotel.country === context.country
      );
      setHotelList(filteredByCountry);
    }
    if (context.availabilityCheck) {
      const filteredByAvailability = hotelList.filter(
        (hotel) => hotel.isAvailable === true
      );
      setHotelList(filteredByAvailability);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context]);

  return (
    <div className="HotelList">
      {hotelList.map((hotel) => {
        return (
          <Hotel
            key={hotel.id}
            name={hotel.name}
            country={hotel.country}
            city={hotel.city}
            price={hotel.price}
            currency={hotel.currency}
            isAvailable={hotel.isAvailable}
            hasSwimmingPool={hotel.hasSwimmingPool}
            imageUrl={hotel.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default HotelList;
