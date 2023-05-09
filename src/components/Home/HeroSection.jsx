/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import BucketIcon from '../../svgs/BucketIcon';
import Button from '../common/Button';
import Container from '../common/Container';
import Row from '../common/Row';

const HeroSection = () => {
  return (
    <div className="w-full bg-[#1e28320d]">
      <Container className="py-[101px]">
        <Row className="w-full items-center">
          <div className="w-[46%] mr-[50px]">
            <h1 className="text-[74px] text-black font-light">Collections</h1>
            <p className="text-[30px] text-black mt-[52px]">
              You can explore ans shop many differnt collection from various
              barands here.
            </p>
            <Button Icon={BucketIcon} iconColor="#ffffff" title="Shop Now" />
          </div>
          <div className="w-[46%]">
            <div className="w-[424px] h-[542px] relative">
              <img
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                alt="Hero image"
                className="animate-[wobble_10s_ease-in] h-full w-full rounded-tl-[160px] rounded-br-[160px]"
              />
              <div className="animate-[wobble_10s_ease-in] absolute h-full w-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
