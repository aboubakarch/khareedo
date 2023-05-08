import React from 'react';
import Container from './Container';
import Row from './Row';

const menus = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Entertainment',
  'Art & Collectibles',
  'Craft Supplies & Tools',
];

const BottomHeader = () => {
  return (
    <Row className="w-full bg-[#1e28320d] h-[60px] items-end">
      <Container className="h-full">
        <Row className="items-center justify-between w-full h-full">
          {menus.map((item) => (
            <p key={item} className="text-[16px] text-[#000000]">
              {item}
            </p>
          ))}
        </Row>
      </Container>
    </Row>
  );
};

export default BottomHeader;
