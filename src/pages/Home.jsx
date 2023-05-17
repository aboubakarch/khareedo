/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useNavigation } from 'react-router-dom';
import BestSeller from '../components/Home/BestSeller';
import BrandsBanner from '../components/Home/BrandsBanner';
import HeroSection from '../components/Home/HeroSection';
import PopularProducts from '../components/Home/PopularProducts';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <BrandsBanner />
        <PopularProducts />
        <BestSeller />
      </Layout>
    </>
  );
};

export default Home;
