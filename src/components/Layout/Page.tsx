import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import dynamic from 'next/dynamic';
// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../../components/Sections/Header'), {ssr: false});
const Footer = dynamic(() => import('../../components/Sections/Footer'), {ssr: false});

const Page: NextPage<PropsWithChildren<any>> = memo(({children}) => {
  return (
    <>
      <Head>
        <title>Lumina</title>
        <meta content="" name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="Lumina" property="og:title" />
        <meta content="Lumina is the most awesome" property="og:description" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
      </Head>
      {
        <>
          {/* @ts-ignore */}
          <Header />
          {children}
          {/* @ts-ignore */}
          <Footer />
        </>
      }
    </>
  );
});

Page.displayName = 'Page';
export default Page;
