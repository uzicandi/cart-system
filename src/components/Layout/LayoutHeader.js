import React from 'react';
import { Row, Col, Typography } from 'antd';
import { PRODUCTS_LIST_PATH, CART_PATH } from '../../pages/const';
import { useRouter } from 'next/dist/client/router';
import { HeaderLinkButton } from '../Button/HeaderLinkButton';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AppstoreOutlined } from '@ant-design/icons';

export const LayoutHeader = () => {
  const router = useRouter();
  const { Title } = Typography;
  const isCartPage = router.pathname === CART_PATH;
  return (
    <>
      <Row>
        <Col xs={20} sm={12}>
          {isCartPage ? (
            <Title style={titleStyle}>장바구니</Title>
          ) : (
            <Title style={titleStyle}>상품목록</Title>
          )}
        </Col>
        <Col xs={4} sm={12} style={{ textAlign: 'right' }}>
          {isCartPage ? (
            <HeaderLinkButton
              to={PRODUCTS_LIST_PATH}
              icon={<AppstoreOutlined />}
              text="상품목록"
            />
          ) : (
            <HeaderLinkButton
              to={CART_PATH}
              icon={<ShoppingCartOutlined />}
              text="장바구니"
            />
          )}
        </Col>
      </Row>
    </>
  );
};

const titleStyle = {
  color: '#fff',
  verticalAlign: 'center',
  marginTop: '7px'
};
