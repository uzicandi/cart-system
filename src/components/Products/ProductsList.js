import React from 'react';
import { ProductCard } from './ProductCard';
import { Row, Col, Empty, Pagination } from 'antd';

export const ProductsList = props => {
  const itemList = props.productList;
  let itemListLength;
  if (itemList) {
    itemListLength = itemList.length;
  }

  return (
    <>
      <Row>
        {itemList ? (
          itemList.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <Empty />
        )}
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={3}
            total={itemListLength}
          />
        </Col>
      </Row>
    </>
  );
};
