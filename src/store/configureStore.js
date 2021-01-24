import { configureStore, createStore } from '@reduxjs/toolkit';
import modules from './modules';
import { productItems } from '../data/productItems';

export const initialState = {
  productItems: productItems
};

/* aciton */
const GET_PRODUCTS = 'GET_PRODUCTS';

/* action creation */
const getProducts = () => {
  return {
    type: GET_PRODUCTS
  };
};

export const productsActionCreation = {
  getProducts
};

const reducer = (state = initialState.productItems, action) => {
  console.log('action', action);
  switch (action.type) {
    case GET_PRODUCTS:
      console.log('action.type');
      return state;
  }
};

const store = configureStore({ reducer });

export default store;

// export default function configureStore() {
//   const store = createStore(modules);
//   return store;
// }
