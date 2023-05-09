import React from 'react';
import FilterIcon from '../../svgs/Filter';
import Button from '../common/Button';
import Container from '../common/Container';
import ProductCard from '../common/ProductCard';
import Row from '../common/Row';

const BestSeller = () => {
  return (
    <Container>
      <h1 className="w-full text-center text-[50px] text-black font-medium mt-[140px]">
        Best Seller Products
      </h1>
      <Row className="my-[35px] justify-between items-center">
        <Row>
          <p className="text-[16px] font-semibold text-black mr-[40px] cursor-pointer hover:text-[#757575]">
            All Products
          </p>
          <p className="text-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#272727]">
            T-Shirts
          </p>
          <p className="text-[16px] text-[#00000080] mr-[40px] cursor-pointer hover:text-[#272727]">
            Hoodies
          </p>
          <p className="text-[16px] text-[#00000080] cursor-pointer hover:text-[#272727]">
            Jacket
          </p>
        </Row>
        <Button
          title="Filter"
          Icon={FilterIcon}
          iconColor="#ffffff"
          className="!px-[15px] !py-[6px] !text-[16px] !mt-[0px]"
        />
      </Row>
      <Row className="flex-wrap justify-between">
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
        <ProductCard
          className="!w-[24%] mb-[24px]"
          data={{
            image: '/imgs/14.png',
            title: 'Adicolor Classics Joggers',
            category: 'Dress',
            price: '$200.00',
          }}
        />
      </Row>
    </Container>
  );
};

export default BestSeller;
