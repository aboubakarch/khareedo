/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Layout from '../components/Layout';
import CartContext from '../contextAPIs/cartConext';
import { useEffectUnsafe } from '../hooks';
import { PAGES_ROUTES } from '../routes';
import client from '../service';
import Star from '../svgs/Star';
import { handleDecrease, handleIncrease } from '../utils/cartManagement';

const ProductDetails = () => {
  const { cartProduct, setCartProduct } = useContext(CartContext);
  const params = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  const handleInc = () => {
    const cp = handleIncrease(cartProduct, params.id);
    setCartProduct(cp);
  };

  const handleDec = () => {
    const cp = handleDecrease(cartProduct, params.id);
    setCartProduct(cp);
  };

  const handleAddToCart = () => {
    const ctp = [...(cartProduct || [])];
    ctp.push({ productId: params.id, qty: 1 });
    setCartProduct(ctp);
    history.push(PAGES_ROUTES.cart);
  };

  const getQty = () => {
    const prod = cartProduct?.find((item) => item.productId === params.id);
    if (prod) return prod.qty;
    return 0;
  };

  const getProductDetaill = () => {
    client
      .get(`/products/${params.id}`)
      .then((res) => {
        setData(res.data);
        toggleLoading();
      })
      .catch((error) => {
        console.log(error);
        toggleLoading();
      });
  };

  useEffectUnsafe(() => {
    if (!data && !loading) {
      setLoading(true);
      getProductDetaill(params.id);
    }
  }, []);

  return (
    <Layout>
      <Container className="my-6">
        <Row className="justify-between">
          <Row className="flex-col w-[47%]">
            {loading ? (
              <Skeleton height="80vh" />
            ) : (
              <img
                className="w-full object-cover h-[80vh]"
                src={data?.img}
                alt="product"
              />
            )}
          </Row>
          <Row className="flex-col w-[47%]">
            {loading ? (
              <div className="w-[100%]">
                <Skeleton height="50px" />
              </div>
            ) : (
              <h1 className="text-[30px] text-slate-700 font-semibold">
                {data?.category} | <span>{data?.title}</span>
              </h1>
            )}
            <Row className="mt-7">
              {loading ? (
                <div className="w-1/2">
                  <Skeleton height="50px" />
                </div>
              ) : (
                [...new Array(data?.rating || 0)].map((_, idx) => (
                  <Star className="mr-1" key={idx} />
                ))
              )}
            </Row>
            <Row className="mt-8 items-center">
              <p className="text-[20px] text-black font-medium">Price:</p>
              {loading ? (
                <Skeleton width="100px" height="30px" />
              ) : (
                <p className="text-[18px] text-black ml-[5px]">{data?.price}</p>
              )}
            </Row>
            <Row className="mt-5 items-center">
              <p className="text-[20px] text-black font-medium">Category:</p>
              {loading ? (
                <Skeleton width="100px" height="30px" />
              ) : (
                <p className="text-[18px] text-black ml-[5px]">
                  {data?.category}
                </p>
              )}
            </Row>
            <Row className="mt-5">
              <p className="text-[20px] text-black font-medium">Description:</p>
              {loading ? (
                <div className="w-[80%]">
                  <Skeleton height="20px" count={5} />
                </div>
              ) : (
                <p className="text-[18px] text-black ml-[5px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita minus recusandae sit debitis dolor saepe modi,
                  voluptatibus esse. minus recusandae sit debitis dolor saepe
                  modi, voluptatibus esse.
                </p>
              )}
            </Row>

            <Row className="mt-[100px] items-center">
              <Button
                onClick={handleDec}
                className="!mt-0 font-semibold py-[10px]"
                title="-"
              />
              <p className="w-[70px] text-center text-[16px] font-semibold">
                {getQty()}
              </p>
              <Button
                onClick={handleInc}
                className="!mt-0 font-semibold py-[10px]"
                title="+"
              />
            </Row>
            <Row className="mt-7 gap-[10px]">
              {getQty() <= 0 && (
                <Button
                  onClick={handleAddToCart}
                  className="!mt-0 font-semibold py-[10px] !px-[35px]"
                  title="+ Add to cart"
                />
              )}
              <Link to={PAGES_ROUTES.cart}>
                <Button
                  className="!mt-0 font-semibold py-[10px] !px-[35px]"
                  title="View Cart"
                />
              </Link>
            </Row>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetails;
