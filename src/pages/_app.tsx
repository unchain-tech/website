import { AppProps } from 'next/app';

import '/public/styles/globals.css';

const UNCHAIN_LP = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default UNCHAIN_LP;
