import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getBestSeller, getBestSellerByCategoryId } from '../../data';
import FilterIcon from '../../svgs/Filter';
import Button from '../common/Button';
import Container from '../common/Container';
import ProductCard from '../common/ProductCard';
import Row from '../common/Row';
import ProductSkelton from './ProductSkelton';

const BestSeller = () => {
  const [products, setProducts] = useState();
  const [loadingProduct, setLoadingProducts] = useState(false);
  const [loadingCategories, setLoadingCat] = useState(false);
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCat] = useState(-1);

  const getProducts = async (id = '') => {
    try {
      const res = await axios.get(
        `http://localhost:3000/products${id ? `?cid=${id}` : ''}`
      );
      setProducts(res.data);
      setLoadingProducts(false);
    } catch (error) {
      setLoadingProducts(false);
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const resCat = await axios.get('http://localhost:3000/categories');
      setCategories(resCat.data);
      setLoadingCat(false);
    } catch (error) {
      setLoadingCat(false);
      console.log(error);
    }
  };

  const handleCategoryClick = (id) => {
    setLoadingProducts(true);
    getProducts(id === -1 ? '' : id);
    setSelectedCat(id);
  };

  const getInitialData = async () => {
    setLoadingCat(true);
    setLoadingProducts(true);
    getCategories();
    getProducts();
  };

  const getCategoryClasses = (id) => {
    return `text-[16px] ${
      selectedCategory === id ? 'font-semibold text-black' : 'text-[#00000080]'
    } mr-[40px] cursor-pointer hover:text-[#757575]`;
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[50px] text-black font-medium mt-[140px]">
        Best Seller Products
      </h1>
      <Row className="my-[35px] justify-between items-center">
        <Row className="items-center">
          <p
            className={getCategoryClasses(-1)}
            onClick={() => handleCategoryClick(-1)}
          >
            All Products
          </p>
          {loadingCategories ? (
            <>
              <Skeleton width="150px" height="50px" />
              <Skeleton width="150px" height="50px" />
              <Skeleton width="150px" height="50px" />
              <Skeleton width="150px" height="50px" />
            </>
          ) : (
            categories?.map(({ id, name }) => (
              <p
                onClick={() => handleCategoryClick(id)}
                key={id}
                className={getCategoryClasses(id)}
              >
                {name}
              </p>
            ))
          )}
        </Row>
        <Button
          title="Filter"
          Icon={FilterIcon}
          iconColor="#ffffff"
          className="!px-[15px] !py-[6px] !text-[16px] !mt-[0px]"
        />
      </Row>
      <Row className="flex-wrap justify-between">
        {loadingProduct ? (
          [...new Array(8)].map((_, idx) => <ProductSkelton key={idx} />)
        ) : products?.length > 0 ? (
          products?.map((product) => (
            <ProductCard
              key={product.id}
              className="!w-[24%] mb-[24px]"
              data={product}
            />
          ))
        ) : (
          <Row className="h-[200px] items-center justify-center w-full">
            <p className="text-[#666666] text-[14px]">No product found.</p>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default BestSeller;
