/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import BestSeller from '../components/Home/BestSeller';
import Layout from '../components/Layout';

const Shop = () => {
  return (
    <>
      <Layout>
        <BestSeller isShop />
      </Layout>
    </>
  );
};

export default Shop;
