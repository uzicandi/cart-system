import React from 'react';
import { productItems } from '../data/productItems';
import { ProductCard } from 'components/Products/ProductCard';

function ProductListContainer() {
  const data = productItems;
  console.log('data', data);
  return <ProductCard />;
}

export default ProductListContainer;
