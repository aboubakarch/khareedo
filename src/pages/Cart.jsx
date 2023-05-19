import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Layout from '../components/Layout';
import CartContext from '../contextAPIs/cartConext';
import { PAGES_ROUTES } from '../routes';

const Cart = () => {
  const { cartProduct } = useContext(CartContext);
  const router = useHistory();

  return (
    <Layout>
      <Container className="py-6">
        <Row className="mb-[30px]">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className=" flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">Qty</h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Total
            </h6>
          </Row>
        </Row>
        {cartProduct ? (
          cartProduct.map((item) => <CartItem key={item.id} data={item} />)
        ) : (
          <p>No Product Found in Cart</p>
        )}
        <Button
          onClick={() => router.push(PAGES_ROUTES.checkout)}
          title="Proceed to Checkout"
          className="w-full py-2 justify-center"
        />
      </Container>
    </Layout>
  );
};

export default Cart;
