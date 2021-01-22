import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const HeaderStyle = styled.div`
  background-color: blue;
`;

export const LayoutHeader = () => {
  return (
    <>
      <HeaderStyle>
        <Link href="/products">Products</Link>
        <span>|</span>
        <Link href="/cart">Cart</Link>
      </HeaderStyle>
    </>
  );
};
