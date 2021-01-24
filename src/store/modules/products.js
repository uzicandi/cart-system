import { productItems } from '../../data/productItems';

export const initialState = {
  productItems: productItems
};

export default function products(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state;
  }
}
