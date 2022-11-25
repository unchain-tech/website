import Layout from 'components/layouts/baseLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <div>
        <Head>
          <title>UNCHAIN</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout pageTitle="Home">
          <h1 className="text-brand-yellow">UNCHAIN</h1>
          <h1>YOUR</h1>
          <h1 className="">POTENTIAL.</h1>
        </Layout>
      </div>
    </div>
  );
}
