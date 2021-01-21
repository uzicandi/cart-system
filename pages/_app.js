import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex,
    width: 100%,
    height: 100vh,
  }
  header {
    height: 60px
  }
  span {
    margin: 0 8px
  }

`;

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Static Website</title>
        </Head>
        <div>
          <header>
            <Link href="/">Home</Link>
            <span>|</span>
            <Link href="/products">Products</Link>
            <span>|</span>
            <Link href="/cart">Cart</Link>
          </header>
          <main>
            <Component {...other}></Component>
          </main>
        </div>
      </Container>
    );
  }
}
