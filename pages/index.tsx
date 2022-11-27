import Head from 'next/head';
import Image from 'next/image';

import { FC } from 'react';

import Layout from 'components/layouts/baseLayout';
import Collaborators from 'components/sections/collaborators';
import Landing from 'components/sections/firstview';
import Joinus from 'components/sections/joinus';
import Projects from 'components/sections/projects';
import Services from 'components/sections/services';
import Values from 'components/sections/values';
import thumbnailNFT from 'public/thumbnail_nft.png';

export const Home: FC = () => {
  return (
    <div id="page" className="">
      <Head>
        <title>UNCHAIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle="Home">
        <Image
          src={thumbnailNFT}
          alt="A thumbnail image of UNCHAIN NFTs"
          className="absolute -z-10 right-0"
          width={640}
          height={640}
        />

        <div id="body" className="pt-96 desktop:pt-96">
          <Landing />
          <Services />
          <Values />
          <Projects />
          <Collaborators />
          <Joinus />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
