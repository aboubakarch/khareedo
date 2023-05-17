import React, { useEffect, useState } from 'react';
import { getProductById } from '../../data';
import Button from '../common/Button';
import Row from '../common/Row';

const CartItem = ({ data }) => {
  const [product, setProduct] = useState();

  const getSubTotal = () => {
    if (product?.id) {
      const price = product.price.replace('$', '');
      const total = parseInt(price) * data?.qty;
      return `$${total}`;
    }
    return 'N/A';
  };

  useEffect(() => {
    const prod = getProductById(data?.productId);
    setProduct(prod);
  }, []);

  return (
    <Row className="border-[1px] border-gray-400 rounded flex-col mb-[30px]">
      <Row className="items-center w-full py-[10px] px-[20px]">
        <Row className="w-[20%]">
          <img
            className="w-2/3 h-[150px] object-cover rounded-[6px]"
            src={product?.img}
            alt="cart-img"
          />
        </Row>
        <p className="w-[20%] text-[16px] text-black font-medium">
          {product?.title}
        </p>
        <p className="w-[20%] text-[16px] text-black font-medium">
          {product?.price}
        </p>
        <Row className="items-center w-[20%]">
          <Button title="-" className="!py-[0px] !px-[10px] !mt-[0px]" />
          <p className="w-[20%] text-[16px] text-black font-medium text-center">
            {data?.qty}
          </p>
          <Button title="+" className="!py-[0px] !px-[10px] !mt-[0px]" />
        </Row>
        <p className="w-[20%] text-[16px] text-black font-medium">
          {getSubTotal()}
        </p>
      </Row>
    </Row>
  );
};

export default CartItem;
