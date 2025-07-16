import '@/styles/globals.css';
import Head from 'next/head';
import { kanit } from '../styles/fonts';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ราชกิจจานุเบกษา</title>
      </Head>
      <main className={kanit.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
