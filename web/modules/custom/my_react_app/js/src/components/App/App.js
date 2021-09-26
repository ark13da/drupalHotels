import React from 'react';
import HotelsProvider from '../../providers/HotelsProvider';
import HotelSearch from '../HotelSearch/HotelSearch';
import HotelList from '../HotelList/HotelList';
import './App.scss';

const App = () => {
  return (
    <section className="hotelApp">
      <HotelsProvider>
        <header>
          <h1>Siili's hotel reservation system</h1>
          <HotelSearch />
        </header>
        <section>
          <HotelList />
        </section>
      </HotelsProvider>
    </section>
  );
};

export default App;
