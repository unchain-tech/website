import Head from 'next/head';

import { FC, ReactNode } from 'react';

import Footer from 'components/molecules/footer';
import Header from 'components/molecules/header';

type Props = {
  pageTitle: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ pageTitle, children }) => {
  const siteTitle = 'UNCHAIN';
  const subTitle = 'gm, world';

  return (
    <>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle} | ${siteTitle}`
            : `${siteTitle} | ${subTitle}`}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="unchain.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UNCHAIN" />
        <meta
          property="og:image"
          content="https://www.unchain.tech/UNCHAIN_banner.png"
        />
        <meta
          property="og:description"
          content="Learn how to develop and contribute to the decentralized web, earning tokens based on your on-chain activity."
        />
        <meta
          name="description"
          content="UNCHAIN is a community of passionate builders in the blockchain space."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@zsh0x" />
      </Head>

      <Header />

      <main className="py-4">
        <div className="page-main">{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
