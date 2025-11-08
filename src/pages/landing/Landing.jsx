import React from 'react';
import LayOut from '../../components/Layout/Layout';
import Carousel from '../../components/carousel/Carousel';
import Category from '../../components/Catagory/Catagory';
import Product from '../../components/product/Product';

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
