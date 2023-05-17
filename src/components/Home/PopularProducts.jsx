import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sortProductDescByRating } from '../../data';
import { PAGES_ROUTES } from '../../routes';
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
          <p className="text-[34px] h-[648px] w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <Link to={`${PAGES_ROUTES.productDetails}/${products?.[0].id}`}>
          <img
            className="w-[648px] h-[648px] object-cover cursor-pointer"
            src={products?.[0].img}
            alt="popular"
          />
        </Link>
        <Row className="flex-wrap w-1/2 gap-[24px]">
          {products?.slice(1).map((product) => (
            <div className="w-[46%] cursor-pointer" key={product.id}>
              <Link to={`${PAGES_ROUTES.productDetails}/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[312px] h-[312px] object-cover"
                />
              </Link>
            </div>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
