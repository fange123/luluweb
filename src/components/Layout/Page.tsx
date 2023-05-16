import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import dynamic from 'next/dynamic';
// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../../components/Sections/Header'), {ssr: false});

const Page: NextPage<PropsWithChildren<any>> = memo(({children}) => {
  return (
    <>
      <Head>
        <title>LuminaCoin</title>
        <meta content="" name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="LuminaCoin" property="og:title" />
        <meta content="LuminaCoin is the most awesome" property="og:description" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
      </Head>
      {
        <>
          {/* @ts-ignore */}
          <Header />
          {children}
        </>
      }
    </>
  );
});

Page.displayName = 'Page';
export default Page;
