import { googleTagManagerId } from '@/lib/gtag';
import GoogleTagManager from 'components/utils/gtm';
import { AppProps } from 'next/app';
import '/public/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId}/>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
