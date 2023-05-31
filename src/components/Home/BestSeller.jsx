import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useEffectUnsafe } from '../../hooks';
import client from '../../service';
import FilterIcon from '../../svgs/Filter';
import Button from '../common/Button';
import Container from '../common/Container';
import ProductCard from '../common/ProductCard';
import Row from '../common/Row';
import ProductSkelton from './ProductSkelton';

const BestSeller = ({ isShop = false }) => {
  const [products, setProducts] = useState();
  const [loadingProduct, setLoadingProducts] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingCategories, setLoadingCat] = useState(false);
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCat] = useState(-1);

  const getProducts = async (id = '', nextPage = 1) => {
    try {
      const res = await client.get(
        `/products?page=${nextPage || page}&pageSize=5&sortBy=rating&sort=desc${
          id !== -1 ? `&cid=${id}` : ''
        }`
      );
      setProducts((prev) => {
        if (id === selectedCategory) {
          return [...(prev || []), ...res.data.docs];
        }
        return res.data.docs;
      });
      if (isShop) {
        setHasMore(res.data.hasNextPage);
        setPage(res.data.nextPage);
      }
      setLoadingProducts(false);
    } catch (error) {
      setLoadingProducts(false);
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const resCat = await client.get('/categories');
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

  useEffectUnsafe(() => {
    getInitialData();
  }, []);

  return (
    <Container>
      {!isShop && (
        <h1 className="w-full text-center text-[50px] text-black font-medium mt-[140px]">
          Best Seller Products
        </h1>
      )}
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
            categories?.map(({ _id, title }) => (
              <p
                onClick={() => handleCategoryClick(_id)}
                key={_id}
                className={getCategoryClasses(_id)}
              >
                {title}
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
              key={product._id}
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
      {isShop && hasMore && (
        <Row className="justify-center mb-[30px]">
          <Button
            title="Load More"
            onClick={() => getProducts(selectedCategory, page)}
          />
        </Row>
      )}
    </Container>
  );
};

export default BestSeller;
