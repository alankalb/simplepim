import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Simple PIM</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider shopOrigin="alankalb.myshopify.com">
          <Component {...pageProps} />
        </AppProvider>
          
      </React.Fragment>
    );
  }
}

export default MyApp;