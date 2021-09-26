import React from 'react';
import './HotelSearch.scss';
import useHotel from '../../hooks/useHotel';

const HotelSearch = () => {
  const context = useHotel();
  const listOfCountries = context.hotels
    .filter((hotel) => hotel.hasOwnProperty('country'))
    .map((hotel) => hotel.country);
  const uniqueCountries = [...new Set(listOfCountries)];

  return (
    <div className="HotelSearch">
      <form>
        <label className="blockLabel" htmlFor="hotelDropDown">
          Filter by country
        </label>
        <select
          id="hotelDropDown"
          className="dropDown"
          name="hotelDropDown"
          defaultValue={context.country}
          onChange={context.selectCountry}
        >
          <option value="">-- select a country --</option>
          {uniqueCountries.map((country) => {
            return (
              <option key={uniqueCountries.indexOf(country)} value={country}>
                {country}
              </option>
            );
          })}
        </select>
        <input
          id="isAvailable"
          className="marginedInput"
          type="checkbox"
          name="isAvailable"
          onClick={context.toggleAvailibility}
        />
        <label htmlFor="isAvailable">Is available</label>
      </form>
    </div>
  );
};

export default HotelSearch;
