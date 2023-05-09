/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/Footer';
import BestSeller from '../components/Home/BestSeller';
import BrandsBanner from '../components/Home/BrandsBanner';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BrandsBanner />
      <PopularProducts />
      <BestSeller />
      <Footer />
    </>
  );
};

export default Home;
