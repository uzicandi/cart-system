import React from 'react';
import { ProductCard } from '../components/Products/ProductCard';
import { Row, Col, List } from 'antd';

function Products() {
  return (
    <>
      <List size="large">
        <ProductCard />
      </List>
    </>
  );
}

export default Products;
