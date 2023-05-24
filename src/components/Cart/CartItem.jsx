import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffectUnsafe } from '../../hooks';
import client from '../../service';
import { getPrice } from '../../utils/cartManagement';
import QtyCounter from '../common/QtyCounter';
import Row from '../common/Row';

const CartItem = ({ data }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const getSubTotal = () => {
    if (product?.id) {
      const price = getPrice(product?.price);
      const total = price * data?.qty;
      return `$${total}`;
    }
    return 'N/A';
  };

  const toggleLoading = () => setLoading((prev) => !prev);

  const getProductById = async () => {
    try {
      const resp = await client.get(`/products/${data.productId}`);
      setProduct(resp.data);
      toggleLoading();
    } catch (error) {
      console.log(error);
      toggleLoading();
    }
  };

  useEffectUnsafe(() => {
    toggleLoading();
    getProductById();
  }, []);

  return (
    <Row className="border-[1px] border-gray-400 rounded flex-col mb-[30px]">
      <Row className="items-center w-full py-[10px] px-[20px]">
        <Row className="w-[20%]">
          {loading ? (
            <div className="w-2/3">
              <Skeleton height="150px" />
            </div>
          ) : (
            <img
              className="w-2/3 h-[150px] object-cover rounded-[6px]"
              src={product?.img}
              alt="cart-img"
            />
          )}
        </Row>
        <p className="w-[20%] text-[16px] text-black font-medium">
          {loading ? (
            <div className="w-2/3">
              <Skeleton height="30px" />
            </div>
          ) : (
            product?.title
          )}
        </p>
        <p className="w-[20%] text-[16px] text-black font-medium">
          {loading ? (
            <div className="w-2/3">
              <Skeleton height="30px" />
            </div>
          ) : (
            product?.price
          )}
        </p>
        <QtyCounter data={product} />
        <p className="w-[20%] text-[16px] text-black font-medium">
          {loading ? (
            <div className="w-2/3">
              <Skeleton height="30px" />
            </div>
          ) : (
            getSubTotal()
          )}
        </p>
      </Row>
    </Row>
  );
};

export default CartItem;
