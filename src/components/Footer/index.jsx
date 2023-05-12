import React from 'react';
import Container from '../common/Container';
import Row from '../common/Row';

const Footer = () => {
  return (
    <Container className="bg-black h-[52px] py-[14px]">
      <Row className="text-[#ffffff] justify-between h-full items-center">
        <p>© 2022 Khareedo , Inc.</p>
        <img className="w-[283px]" src="/imgs/cards.png" alt="cards" />
        <p>Scroll to top </p>
      </Row>
    </Container>
  );
};

export default Footer;
