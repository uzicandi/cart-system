import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsActionCreation } from '../store/configureStore';
import { ProductsList } from 'components/Products/ProductsList';

function ProductListContainer() {
  const productList = useSelector(state => state, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActionCreation.getProducts());
  }, [dispatch]);
  return <ProductsList productList={productList} />;
}

export default ProductListContainer;
