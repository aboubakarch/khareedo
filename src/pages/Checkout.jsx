import React, { useContext, useState } from 'react';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import Form from '../components/Forms/Form';
import Input from '../components/Forms/Input';
import Layout from '../components/Layout';
import CartContext from '../contextAPIs/cartConext';
import { getPrice } from '../utils/cartManagement';
import * as Yup from 'yup';
import RadioButton from '../components/Forms/RadioButton';
import { toast } from 'react-toastify';
import CheckoutItem from '../components/Checkout/CheckoutItem';
import { useEffectUnsafe } from '../hooks';

const checkoutSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  phone: Yup.string().min(11).max(14).required('Mobile number is required'),
  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email must be a valid email')
    .required('Email is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  postalCode: Yup.string().required('Postal Code  is required'),
});

const Checkout = () => {
  // =============== States and varibles section ================
  const { cartProduct } = useContext(CartContext);
  const [price, setPrice] = useState(0);

  const vat = 0.1;

  // =============== States and varibles section END ================

  // =============== Event handlers and other function sction ================

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    toast.info('Order has been placed!');
  };

  const handlePrice = (p) => {
    const proPrice = getPrice(p);
    setPrice((prev) => prev + proPrice);
  };

  const getGrandTotal = () => {
    const total = price;
    const tax = total * vat;
    return total + tax;
  };

  // useEffectUnsafe(() => {
  //   if (cartProduct) {
  //     // let tp = 0;
  //     // cartProduct.map(async (item) => {
  //     //   console.log('Started');
  //     //   const res = await client.get(`/products/${item.productId}`);
  //     //   tp += getPrice(res.data.price);
  //     //   console.log(tp);
  //     //   console.log('Eneded');
  //     // });
  //     // console.log('FINAL price', tp);
  //     Promise.all(
  //       cartProduct.map((item, idx) =>
  //         client.get(`/products/${idx < 1 ? item.productId : -1}`)
  //       )
  //     )
  //       .then((res) => {
  //         let tp = 0;
  //         res.forEach((item) => (tp += getPrice(item.data.price)));
  //         console.log(tp);
  //       })
  //       .catch((error) => {
  //         console.log('ERROR', error);
  //       });
  //   }
  // });

  // =============== Event handlers and other function sction END ================

  return (
    <Layout>
      <Form
        onSubmit={handleSubmit}
        validationSchema={checkoutSchema}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          state: '',
          country: '',
          address: '',
          postalCode: '',
          paymentType: false,
        }}
      >
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
                    label="Full name*"
                  />
                  <Input
                    className=" w-1/2"
                    name="phone"
                    placeholder="Enter your mobile number"
                    label="Mobile number*"
                  />
                </Row>
                <Input
                  type="email"
                  className="mb-[20px]"
                  name="email"
                  placeholder="Enter your email"
                  label="Email*"
                />
                <Input
                  className="mb-[20px]"
                  name="address"
                  placeholder="Enter your address"
                  label="Adress*"
                />
                <Row className="gap-[20px]">
                  <Input
                    className="w-[40%]"
                    name="state"
                    placeholder="Enter your state/province"
                    label="State/Province"
                  />
                  <Input
                    name="country"
                    placeholder="Enter your country"
                    label="Country"
                  />
                  <Input
                    name="postalCode"
                    placeholder="Enter your postal code"
                    label="Postal Code"
                  />
                </Row>
              </div>

              <h6 className="text-[20px] text-black font-bold mt-[20px]">
                Payment Method
              </h6>
              <div className="bg-white p-[30px] w-full mt-[20px]">
                <Row className="gap-[20px]">
                  <RadioButton
                    labelClass="mb-0"
                    inputClass="h-[25px] w-[25px]"
                    className="!flex-row-reverse items-center gap-[10px]"
                    type="radio"
                    value="cod"
                    name="paymentType"
                    label="COD"
                  />
                  <RadioButton
                    labelClass="mb-0"
                    inputClass="h-[25px] w-[25px]"
                    className="!flex-row-reverse items-center gap-[10px]"
                    type="radio"
                    name="paymentType"
                    label="Credit Card"
                    value="cc"
                  />
                  <RadioButton
                    labelClass="mb-0"
                    inputClass="h-[25px] w-[25px]"
                    className="!flex-row-reverse items-center gap-[10px]"
                    type="radio"
                    name="paymentType"
                    label="PayPal"
                    value="paypal"
                  />
                </Row>
              </div>
            </div>
            <div className="w-[33%]">
              <h6 className="text-[20px] text-black font-bold">
                Order Summary
              </h6>
              <div className="bg-white py-[30px] w-full mt-[20px]">
                {cartProduct?.map((product) => (
                  <CheckoutItem
                    product={product}
                    key={product.productId}
                    handlePrice={handlePrice}
                  />
                ))}
                <div className="mt-[150px]">
                  <hr />
                  <Row className="px-[30px] justify-between items-center mt-[20px]">
                    <p className="text-gray-500 text-[14px] font-medium">
                      Subtotal
                    </p>
                    <p className="text-slate-800 text-[14px] font-bold">
                      ${price}
                    </p>
                  </Row>
                  <Row className="px-[30px] justify-between items-center mt-[15px] mb-[20px]">
                    <p className="text-gray-500 text-[14px] font-medium">VAT</p>
                    <p className="text-slate-800 text-[14px] font-bold">
                      ${vat * price}
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
                    type="submit"
                    title="Place Order"
                    className="w-[calc(100%_-_60px)] mx-[30px] justify-center !py-[8px] !mt-[30px]"
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Form>
    </Layout>
  );
};

export default Checkout;
