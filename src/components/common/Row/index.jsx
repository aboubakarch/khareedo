import React from 'react';

const Row = ({ children, className, ...restProps }) => {
  return (
    <div className={`flex ${className}`} {...restProps}>
      {children}
    </div>
  );
};

export default Row;
