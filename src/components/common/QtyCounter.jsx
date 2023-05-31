import React, { useContext } from 'react';
import CartContext from '../../contextAPIs/cartConext';
import { handleDecrease, handleIncrease } from '../../utils/cartManagement';
import Button from './Button';
import Row from './Row';

const QtyCounter = ({ data, className = '' }) => {
  debugger;

  const { cartProduct, setCartProduct } = useContext(CartContext);

  const handleInc = () => {
    const cp = handleIncrease(cartProduct, data?._id);
    setCartProduct(cp);
  };

  const handleDec = () => {
    const cp = handleDecrease(cartProduct, data?._id);
    setCartProduct(cp);
  };

  const getQty = () => {
    const prod = cartProduct?.find((item) => item.productId === data?._id);
    if (prod) return prod.qty;
    return 0;
  };

  return (
    <Row className={`items-center w-[20%] ${className}`}>
      <Button
        disabled={!data}
        title="-"
        className="!py-[0px] !px-[10px] !mt-[0px]"
        onClick={handleDec}
      />
      <p className="w-[20%] text-[16px] text-black font-medium text-center">
        {getQty()}
      </p>
      <Button
        disabled={!data}
        title="+"
        className="!py-[0px] !px-[10px] !mt-[0px]"
        onClick={handleInc}
      />
    </Row>
  );
};

export default QtyCounter;
