import { AppProps } from 'next/app';

import '/public/styles/globals.css';
import GoogleTagManager, { googleTagManagerId } from 'components/utils/gtm';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
