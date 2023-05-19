import React, { useContext, useState } from 'react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import QtyCounter from '../components/common/QtyCounter';
import Row from '../components/common/Row';
import Input from '../components/Forms/Input';
import Layout from '../components/Layout';
import CartContext from '../contextAPIs/cartConext';
import { getProductById } from '../data';
import { getPrice } from '../utils/cartManagement';

const Checkout = () => {
  // =============== States and varibles section ================
  const { cartProduct } = useContext(CartContext);
  const [values, setValues] = useState({});

  const vat = 0.1;
  const products =
    cartProduct?.map((item) => ({
      ...getProductById(item.productId),
      qty: item.qty,
    })) || [];

  // =============== States and varibles section END ================

  // =============== Event handlers and other function sction ================

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const getTotal = () => {
    let total = 0;
    products.forEach((product) => {
      const price = getPrice(product.price);
      total += price * product.qty;
    });
    return total;
  };

  const getGrandTotal = () => {
    const total = getTotal();
    const tax = total * vat;
    return total + tax;
  };
  // =============== Event handlers and other function sction END ================

  return (
    <Layout>
      {/* <form> */}
      <Container className="py-[30px]">
        <Row className="justify-between">
          <div className="w-[65%]">
            <h6 className="text-[20px] text-black font-bold">
              Delivery Information
            </h6>
            <div className="bg-white p-[30px] w-full mt-[20px]">
              <Row className="gap-[20px] mb-[20px]">
                <Input
                  className=" w-1/2"
                  name="name"
                  placeholder="Enter your full name"
                  value={values.name || ''}
                  onChange={handleChange}
                  label="Full name*"
                />
                <Input
                  className=" w-1/2"
                  name="phone"
                  placeholder="Enter your mobile number"
                  value={values.phone}
                  onChange={handleChange}
                  label="Mobile number*"
                />
              </Row>
              <Input
                type="email"
                className="mb-[20px]"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                label="Email*"
              />
              <Input
                className="mb-[20px]"
                name="address"
                placeholder="Enter your address"
                value={values.address}
                onChange={handleChange}
                label="Adress*"
              />
              <Row className="gap-[20px]">
                <Input
                  className="w-[40%]"
                  name="state"
                  placeholder="Enter your state/province"
                  value={values.state}
                  onChange={handleChange}
                  label="State/Province"
                />
                <Input
                  name="country"
                  placeholder="Enter your country"
                  value={values.country}
                  onChange={handleChange}
                  label="Country"
                />
                <Input
                  name="postalCode"
                  placeholder="Enter your postal code"
                  value={values.postalCode}
                  onChange={handleChange}
                  label="Postal Code"
                />
              </Row>
            </div>
            <h6 className="text-[20px] text-black font-bold mt-[20px]">
              Payment Method
            </h6>
            <div className="bg-white p-[30px] w-full mt-[20px]">
              <Row className="gap-[20px]">
                <Input
                  labelClass="mb-0"
                  inputClass="h-[25px] w-[25px]"
                  className="!flex-row-reverse items-center gap-[10px]"
                  type="radio"
                  name="paymentType"
                  label="COD"
                />
                <Input
                  labelClass="mb-0"
                  inputClass="h-[25px] w-[25px]"
                  className="!flex-row-reverse items-center gap-[10px]"
                  type="radio"
                  name="paymentType"
                  label="Credit Card"
                />
                <Input
                  labelClass="mb-0"
                  inputClass="h-[25px] w-[25px]"
                  className="!flex-row-reverse items-center gap-[10px]"
                  type="radio"
                  name="paymentType"
                  label="PayPal"
                />
              </Row>
            </div>
          </div>
          <div className="w-[33%]">
            <h6 className="text-[20px] text-black font-bold">Order Summary</h6>
            <div className="bg-white py-[30px] w-full mt-[20px]">
              {products.map((product) => (
                <Row
                  className="justify-between w-full px-[30px]"
                  key={product.id}
                >
                  <Row className="w-1/2 mb-[20px]">
                    <img
                      className="w-[70px] h-[70px] object-contain"
                      src={product.img}
                      alt={product.title}
                    />
                    <div>
                      <h6 className="text-[16px] text-black font-semibold">
                        {product.title}
                      </h6>
                      <p className="text-[14px] text-slate-700 font-medium">
                        {product.category}
                      </p>
                      <p className="text-[16px] text-slate-900 font-medium">
                        {product.price}
                      </p>
                    </div>
                  </Row>
                  <QtyCounter data={product} className="!w-[40%] justify-end" />
                </Row>
              ))}
              <div className="mt-[150px]">
                <hr />
                <Row className="px-[30px] justify-between items-center mt-[20px]">
                  <p className="text-gray-500 text-[14px] font-medium">
                    Subtotal
                  </p>
                  <p className="text-slate-800 text-[14px] font-bold">
                    ${getTotal()}
                  </p>
                </Row>
                <Row className="px-[30px] justify-between items-center mt-[15px] mb-[20px]">
                  <p className="text-gray-500 text-[14px] font-medium">VAT</p>
                  <p className="text-slate-800 text-[14px] font-bold">
                    ${vat * getTotal()}
                  </p>
                </Row>
                <hr />
                <Row className="px-[30px] justify-between items-center mt-[20px]">
                  <p className="text-gray-500 text-[14px] font-medium">
                    Grand Total
                  </p>
                  <p className="text-slate-800 text-[14px] font-bold">
                    ${getGrandTotal()}
                  </p>
                </Row>
                <Button
                  title="Place Order"
                  className="w-[calc(100%_-_60px)] mx-[30px] justify-center !py-[8px] !mt-[30px]"
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
      {/* </form> */}
    </Layout>
  );
};

export default Checkout;
