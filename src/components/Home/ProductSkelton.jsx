import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProductSkelton = () => {
  return (
    <div className="w-[24%]">
      <Skeleton height="400px" />
      <Skeleton height="40px" />
      <Skeleton height="30px" />
    </div>
  );
};

export default ProductSkelton;
