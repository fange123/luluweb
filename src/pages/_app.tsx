import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';
import Page from '../components/Layout/Page';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      {/* @ts-ignore */}
      <Page>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </Page>
    </>
  );
});

export default MyApp;
