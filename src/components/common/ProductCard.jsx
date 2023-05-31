import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES_ROUTES } from '../../routes';
import Row from './Row';

const ProductCard = ({ className = '', data }) => {
  return (
    <div className={`w-full ${className}`}>
      <Link
        className="w-full"
        to={`${PAGES_ROUTES.productDetails}/${data._id}`}
      >
        <img
          src={data.img}
          alt="product"
          className="h-[400px] object-cover w-full"
        />
        <Row className="px-[10px]">
          <h6 className="text-[16px] text-black font-semibold mt-[18px]">
            {data.title}
          </h6>
        </Row>
        <Row className="justify-between mt-[16px] mb-[10px] px-[10px]">
          <p className="text-[16px] text-[#00000080]">{data.category.title}</p>
          <p className="text-[16px] text-black font-semibold">{data.price}</p>
        </Row>
      </Link>
    </div>
  );
};

export default ProductCard;
