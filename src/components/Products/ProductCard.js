import React from 'react';
import { Card, Tooltip } from 'antd';

export const ProductCard = () => {
  const { Meta } = Card;
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729"
        />
      }
      actions={[<span>20000원</span>, <span>담기</span>]}
    >
      <Tooltip placement="bottom">
        <Meta title="title" />
      </Tooltip>
    </Card>
  );
};
