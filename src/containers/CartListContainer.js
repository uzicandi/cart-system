import React from 'react';
import { coupons } from '../data/coupons';
import { CartPage } from 'components/CartPage';

function CartListContainer() {
  const couponList = coupons;
  console.log('coupon', couponList);
  return <CartPage />;
}

export default CartListContainer;
