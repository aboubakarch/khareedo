import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div className={`w-[100%] px-[10%] ${className || ''}`}>{children}</div>
  );
};

export default Container;
