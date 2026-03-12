import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Categories from '../components/Categories';
import Offers from '../components/Offers';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <div id="about"><About /></div>
      <Categories />
      <div id="offers"><Offers /></div>
      <Reviews />
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
