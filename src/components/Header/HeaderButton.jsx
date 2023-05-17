import React from 'react';
import Row from '../common/Row';

const HeaderButton = ({ Icon, title, className, ...restProps }) => {
  return (
    <Row className={className || ''} {...restProps}>
      <Icon />
      <p className="text-[#1E2832] text-[18px] ml-[10px] hover:text-slate-400">
        {title}
      </p>
    </Row>
  );
};

export default HeaderButton;
