import React from 'react';
import './Hotel.scss';
import testImg from '../../assets/img/federico-de-luca-TQE2kWqyFGk-unsplash.jpg';

const Hotel = ({
  name,
  country,
  city,
  price,
  currency,
  isAvailable,
  hasSwimmingPool,
  imageUrl,
}) => {
  return (
    <div className="HotelCard">
      <img className="hoteImg" src={testImg} alt={name} />
      <p className="hotelName">{name}</p>
      <p className="hotelLocation">
        {city}, {country}
      </p>
      <p className="hotelAvailability">
        Available: {isAvailable ? 'Yes' : 'No'}
      </p>
      <p className="hotelPool">
        Swimming pool: {hasSwimmingPool ? 'Yes' : 'No'}
      </p>
      <p className="hotelPrice">
        {`${price}
        ${currency === 'euro' ? '€' : currency}`}
      </p>
      <button className="viewDeal">VIEW DEAL</button>
    </div>
  );
};

export default Hotel;
