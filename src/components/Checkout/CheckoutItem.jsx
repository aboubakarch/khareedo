import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffectUnsafe } from '../../hooks';
import client from '../../service';
import QtyCounter from '../common/QtyCounter';
import Row from '../common/Row';

const CheckoutItem = ({ product, handlePrice }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getProductData = async () => {
    try {
      setLoading(true);
      const resp = await client.get(`/products/${product.productId}`);
      handlePrice(resp.data.price);
      setData(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffectUnsafe(() => {
    getProductData();
  }, []);

  return (
    <Row className="justify-between w-full px-[30px]">
      <Row className="w-1/2 mb-[20px]">
        {loading ? (
          <div className="w-[70px] h-[70px]">
            <Skeleton height="100%" />
          </div>
        ) : (
          <img
            className="w-[70px] h-[70px] object-contain"
            src={data?.img}
            alt={data?.title}
          />
        )}
        {loading ? (
          <div className="w-[250px] h-[20px] ml-[10px]">
            <Skeleton height="100%" count={3} />
          </div>
        ) : (
          <div>
            <h6 className="text-[16px] text-black font-semibold">
              {data?.title}
            </h6>
            <p className="text-[14px] text-slate-700 font-medium">
              {data?.category.title}
            </p>
            <p className="text-[16px] text-slate-900 font-medium">
              {data?.price}
            </p>
          </div>
        )}
      </Row>
      <QtyCounter
        data={{ ...product, _id: product.productId }}
        className="!w-[40%] justify-end"
      />
    </Row>
  );
};

export default CheckoutItem;
