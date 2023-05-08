import React from 'react';
import UserIcon from '../../svgs/UserIcon';
import Row from '../common/Row';

const HeaderButton = ({ Icon, title, className }) => {
  return (
    <Row className={className || ''}>
      <Icon />
      <p className="text-[#1E2832] text-[18px] ml-[10px]">{title}</p>
    </Row>
  );
};

export default HeaderButton;
