import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Layout from '../components/Layout';
import CartContext from '../contextAPIs/cartConext';
import { getProductById } from '../data';
import { PAGES_ROUTES } from '../routes';
import Star from '../svgs/Star';
import { handleDecrease, handleIncrease } from '../utils/cartManagement';

/* 
[{
    productID:number,
    qty:number
}]
*/

const ProductDetails = () => {
  const { cartProduct, setCartProduct } = useContext(CartContext);
  const params = useParams();
  const [data, setData] = useState();
  const history = useHistory();

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

  useEffect(() => {
    const pData = getProductById(params.id);
    setData(pData);
  }, []);

  return (
    <Layout>
      <Container className="my-6">
        <Row className="justify-between">
          <Row className="flex-col w-[47%]">
            <img
              className="w-full object-cover h-[80vh]"
              src={data?.img}
              alt="product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold">
              {data?.category} | <span>{data?.title}</span>
            </h1>
            <Row className="mt-7">
              {[...new Array(data?.rating || 0)].map((_, idx) => (
                <Star className="mr-1" key={idx} />
              ))}
            </Row>
            <Row className="mt-8 items-center">
              <p className="text-[20px] text-black font-medium">Price:</p>
              <p className="text-[18px] text-black ml-[5px]">{data?.price}</p>
            </Row>
            <Row className="mt-5 items-center">
              <p className="text-[20px] text-black font-medium">Category:</p>
              <p className="text-[18px] text-black ml-[5px]">
                {data?.category}
              </p>
            </Row>
            <Row className="mt-5">
              <p className="text-[20px] text-black font-medium">Description:</p>
              <p className="text-[18px] text-black ml-[5px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita minus recusandae sit debitis dolor saepe modi,
                voluptatibus esse. minus recusandae sit debitis dolor saepe
                modi, voluptatibus esse.
              </p>
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
