import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import { getProductById } from '../data';
import Star from '../svgs/Star';

const ProductDetails = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [qty, setQty] = useState(0);

  const handleIncrease = () => {
    setQty((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQty((prev) => (prev ? prev - 1 : prev));
  };

  useEffect(() => {
    const pData = getProductById(params.id);
    setData(pData);
  }, []);

  return (
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
            {data?.category} |{' '}
            <span>
              {data?.title}
              {/* <div className="h-[5px] w-[150px] bg-slate-700" /> */}
            </span>
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
            <p className="text-[18px] text-black ml-[5px]">{data?.category}</p>
          </Row>
          <Row className="mt-5">
            <p className="text-[20px] text-black font-medium">Description:</p>
            <p className="text-[18px] text-black ml-[5px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              minus recusandae sit debitis dolor saepe modi, voluptatibus esse.
              minus recusandae sit debitis dolor saepe modi, voluptatibus esse.
            </p>
          </Row>

          <Row className="mt-[100px] items-center">
            <Button
              onClick={handleDecrease}
              className="!mt-0 font-semibold py-[10px]"
              title="-"
            />
            <p className="w-[70px] text-center text-[16px] font-semibold">
              {qty}
            </p>
            <Button
              onClick={handleIncrease}
              className="!mt-0 font-semibold py-[10px]"
              title="+"
            />
          </Row>
          <Row className="mt-7">
            <Button
              className="!mt-0 font-semibold py-[10px] !px-[35px]"
              title="+ Add to cart"
            />
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default ProductDetails;
