import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { PAGES_ROUTES } from '../../routes';
import client from '../../service';
import Container from '../common/Container';
import Row from '../common/Row';

const PopularProducts = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await client.get('/products?count=5');
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-[648px] w-[648px] text-black -rotate-90 absolute text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        {loading ? (
          <div className="w-[648px] h-[648px]">
            <Skeleton height={'100%'} />
          </div>
        ) : (
          <Link to={`${PAGES_ROUTES.productDetails}/${products?.[0].id}`}>
            <img
              className="w-[648px] h-[648px] object-cover cursor-pointer"
              src={products?.[0].img}
              alt="popular"
            />
          </Link>
        )}
        <Row className="flex-wrap w-1/2 gap-[24px]">
          {loading
            ? [...new Array(4)].map((_, idx) => (
                <div className="w-[46%] h-[312px]">
                  <Skeleton height="100%" />
                </div>
              ))
            : products?.slice(1).map((product) => (
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
