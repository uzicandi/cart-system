import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import Text from 'antd/lib/typography/Text';

export const HeaderLinkButton = props => {
  const { to, icon, text } = props;
  return (
    <Link href={to}>
      <Button icon={icon}>
        <Text strong={true}>{text}</Text>
      </Button>
    </Link>
  );
};
