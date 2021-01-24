import React from 'react';
import ProductListContainer from '../containers/ProductListContainer';
import { Row, Col, List } from 'antd';

function Products() {
  return (
    <>
      <ProductListContainer />
      {/* <List size="large">
        {' '}
        <ProductCard />
      </List> */}
    </>
  );
}

export default Products;
