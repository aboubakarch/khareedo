import React from 'react';
import Container from '../common/Container';
import Row from '../common/Row';

const PopularProducts = () => {
  return (
    <Container>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-[648px] w-[648px] text-black -rotate-90 absolute text-center">
            Explore new and popular styles
          </p>
        </div>
        <img
          className="w-[648px] h-[648px] object-cover"
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="popular"
        />
        <Row className="flex-wrap w-1/2 gap-[24px]">
          <div className="w-[46%]">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="shoes"
              className="w-[312px] h-[312px] object-cover"
            />
          </div>
          <div className="w-[46%]">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="shoes"
              className="w-[312px] h-[312px] object-cover"
            />
          </div>
          <div className="w-[46%]">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="shoes"
              className="w-[312px] h-[312px] object-cover"
            />
          </div>
          <div className="w-[46%]">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="shoes"
              className="w-[312px] h-[312px] object-cover"
            />
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
