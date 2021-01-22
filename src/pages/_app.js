import App, { Container } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { LayoutHeader } from '../components/Layout/LayoutHeader';
import { LayoutFooter } from '../components/Layout/LayoutFooter';
const GlobalStyle = createGlobalStyle`
  main {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
  header {
    width: 100%;
    height: 60px;
    background-color:red;
  }
  span {
    margin: 0 8px;
  }
  footer {
    width: 100%;
    height: 60px;
    background-color:red;
  }
`;

export default class RootApp extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Cart System</title>
        </Head>
        <header>
          <LayoutHeader />
        </header>
        <main>
          <Component {...other}></Component>
        </main>
        <footer>
          <LayoutFooter />
        </footer>
      </Container>
    );
  }
}
