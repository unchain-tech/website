import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Footer from '@/components/molecules/footer';
import Header from '@/components/molecules/header';

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
      </Head>

      <main>
        <Header />
        <div id="body" className="pt-24">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
