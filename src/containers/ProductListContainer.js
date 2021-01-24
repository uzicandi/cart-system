import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from 'components/Products/ProductCard';
import { productsActionCreation } from '../store/configureStore';

function ProductListContainer() {
  const { data } = useSelector(state => state, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActionCreation.getProducts());
  }, [dispatch]);

  return <ProductCard data={data} />;
}

export default ProductListContainer;
