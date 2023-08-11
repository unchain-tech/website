import { AppProps } from 'next/app';

import '/public/styles/globals.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';

const UNCHAIN_LP = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      ) : null}
      <Component {...pageProps} />
    </>
  );
};

export default UNCHAIN_LP;
