import React from 'react';
import { LayoutHeader } from './LayoutHeader';
import { LayoutFooter } from './LayoutFooter';
import { Layout } from 'antd';

export const LayoutAll = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
        <LayoutHeader />
      </Header>
      <Content style={ContentStyle}>{children}</Content>
      <Footer style={FooterStyle}>
        <LayoutFooter />
      </Footer>
    </Layout>
  );
};

const LayoutStyle = {
  height: '100vh',
  overflow: 'hidden'
};
const HeaderStyle = {
  width: '100%'
};

const ContentStyle = {
  padding: '1rem',
  width: '100%',
  margin: '0 auto',
  overflow: 'auto'
};

const FooterStyle = {
  backgroundColor: '#1b1c1d',
  color: '#fff',
  float: 'right'
};
