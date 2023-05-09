import React from 'react';

const Row = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Row;
