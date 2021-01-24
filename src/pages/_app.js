import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { LayoutAll } from 'components/Layout/LayoutAll';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from '../modules/store';

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    console.log(this);
    return (
      <>
        <Provider store={store}>
          <Head>
            <title>Cart System</title>
          </Head>
          <LayoutAll>
            <Component {...other}></Component>
          </LayoutAll>
        </Provider>
      </>
    );
  }
}
