import React from 'react';
import NavBar from './common/NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
