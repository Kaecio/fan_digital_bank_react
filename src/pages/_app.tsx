import { AppProps } from 'next/app';
import Head from 'next/head';

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fan Digital Bank</title>
        <link rel="shortcut" />
        <link rel="apple-touch-icon" />
        <meta name="description" content=" project Fan Digital Bank" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
