import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { LayoutAll } from 'components/Layout/LayoutAll';
import 'antd/dist/antd.css';

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <>
        <Head>
          <title>Cart System</title>
        </Head>
        <LayoutAll>
          <Component {...other}></Component>
        </LayoutAll>
      </>
    );
  }
}
