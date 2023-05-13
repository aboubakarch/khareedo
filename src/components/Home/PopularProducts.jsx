import React, { useEffect, useState } from 'react';
import { sortProductDescByRating } from '../../data';
import Container from '../common/Container';
import Row from '../common/Row';

const PopularProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const prods = sortProductDescByRating(5);
    setProducts(prods);
  }, []);

  return (
    <Container>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-[648px] w-[648px] text-black -rotate-90 absolute text-center">
            Explore new and popular styles
          </p>
        </div>
        <img
          className="w-[648px] h-[648px] object-cover"
          src={products?.[0].img}
          alt="popular"
        />
        <Row className="flex-wrap w-1/2 gap-[24px]">
          {products?.slice(1).map((product) => (
            <div className="w-[46%]" key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="w-[312px] h-[312px] object-cover"
              />
            </div>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
