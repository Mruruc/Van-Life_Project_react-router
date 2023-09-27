import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='home'>
        <h1>Home Page</h1>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
