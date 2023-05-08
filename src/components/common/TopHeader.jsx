import React from 'react';
import BucketIcon from '../../svgs/BucketIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import SearchIcon from '../../svgs/SearchIcon';
import UserIcon from '../../svgs/UserIcon';
import HeaderButton from '../Header/HeaderButton';
import Container from './Container';
import Row from './Row';

const TopHeader = () => {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <Container className="h-full">
        <Row className="items-center justify-between w-full h-full border-b-[1px] border-[#E3E3E3]">
          <SearchIcon />
          <Row className="items-center">
            <RotatedSquare />
            <h2 className="text-[28px] text-[#000000] mx-[10px]">Khareedo</h2>
            <RotatedSquare />
          </Row>
          <Row>
            <HeaderButton Icon={UserIcon} title="Account" />
            <HeaderButton
              Icon={BucketIcon}
              title="Cart"
              className="ml-[22px]"
            />
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
