/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import BestSeller from '../components/Home/BestSeller';
import BrandsBanner from '../components/Home/BrandsBanner';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandsBanner />
      <PopularProducts />
      <BestSeller />
    </>
  );
};

export default Home;
