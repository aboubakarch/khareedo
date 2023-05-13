import React, { useState, useEffect } from 'react';
import { category, getBestSeller, getBestSellerByCategoryId } from '../../data';
import FilterIcon from '../../svgs/Filter';
import Button from '../common/Button';
import Container from '../common/Container';
import ProductCard from '../common/ProductCard';
import Row from '../common/Row';

// useEffect(()=>{
// This will re-execute every time when state or props updated
// })

// useEffect(()=>{
// This will re-execute every time only when products will updated
// },[products])

// useEffect(()=>{
// This will execute only once
// },[])

const BestSeller = () => {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCat] = useState(-1);

  const handleCategoryClick = (id) => {
    const prods = id === -1 ? getBestSeller() : getBestSellerByCategoryId(id);
    setSelectedCat(id);
    setProducts(prods);
  };

  const getCategoryClasses = (id) => {
    return `text-[16px] ${
      selectedCategory === id ? 'font-semibold text-black' : 'text-[#00000080]'
    } mr-[40px] cursor-pointer hover:text-[#757575]`;
  };

  useEffect(() => {
    setCategories(category);
    const bestSeller = getBestSeller();
    setProducts(bestSeller);
  }, []);

  return (
    <Container>
      <h1 className="w-full text-center text-[50px] text-black font-medium mt-[140px]">
        Best Seller Products
      </h1>
      <Row className="my-[35px] justify-between items-center">
        <Row>
          <p
            className={getCategoryClasses(-1)}
            onClick={() => handleCategoryClick(-1)}
          >
            All Products
          </p>
          {categories?.map(({ id, name }) => (
            <p
              onClick={() => handleCategoryClick(id)}
              key={id}
              className={getCategoryClasses(id)}
            >
              {name}
            </p>
          ))}
        </Row>
        <Button
          title="Filter"
          Icon={FilterIcon}
          iconColor="#ffffff"
          className="!px-[15px] !py-[6px] !text-[16px] !mt-[0px]"
        />
      </Row>
      <Row className="flex-wrap justify-between">
        {products?.length > 0 ? (
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
