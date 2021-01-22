import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export const LayoutHeader = () => {
  const router = useRouter();
  const isCartPage = router.pathname === '/cart';
  return (
    <>
      {isCartPage ? (
        <Link href="/products">Products</Link>
      ) : (
        <Link href="/cart">Cart</Link>
      )}
    </>
  );
};
