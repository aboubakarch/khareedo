import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CartContext from '../../contextAPIs/cartConext';
import { PAGES_ROUTES } from '../../routes';

import BucketIcon from '../../svgs/BucketIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import SearchIcon from '../../svgs/SearchIcon';
import UserIcon from '../../svgs/UserIcon';
import HeaderButton from '../Header/HeaderButton';
import Container from './Container';
import Row from './Row';

const TopHeader = () => {
  const { cartProduct } = useContext(CartContext);
  const router = useHistory();
  const cartItemsCount = cartProduct?.length || 0;

  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <Container className="h-full">
        <Row className="items-center justify-between w-full h-full border-b-[1px] border-[#E3E3E3]">
          <SearchIcon />
          <Row
            className="items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <RotatedSquare />
            <h2 className="text-[28px] text-[#000000] mx-[10px]">Khareedo</h2>
            <RotatedSquare />
          </Row>
          <Row>
            <HeaderButton Icon={UserIcon} title="Account" />
            <Link to={PAGES_ROUTES.cart}>
              <HeaderButton
                Icon={BucketIcon}
                title="Cart"
                className="ml-[22px] cursor-pointer relative"
              >
                {cartItemsCount > 0 && (
                  <span className="absolute h-[16px] w-[16px] text-center text-white text-[10px] font-extrabold bg-[#ff5722] rounded-full left-[12px] -top-1">
                    {cartItemsCount}
                  </span>
                )}
              </HeaderButton>
            </Link>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
