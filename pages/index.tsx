import Image from 'next/image';

import { FC } from 'react';

import Layout from 'components/layouts/baseLayout';
import FirstView from 'components/sections/firstview';
import Joinus from 'components/sections/joinus';
import Projects from 'components/sections/projects';
import Services from 'components/sections/services';
import Supporters from 'components/sections/supporters';
import thumbnailNFT from 'public/thumbnail_nft.png';

export const Home: FC = () => {
  return (
    <Layout pageTitle="Home">
      <Image
        src={thumbnailNFT}
        alt="A thumbnail image of UNCHAIN NFTs"
        className="absolute -z-10 right-0 invisible tablet:visible"
        width={640}
        height={640}
      />

      <div id="body">
        <FirstView />
        <Projects />
        <Services />
        <Supporters />
        <Joinus />
      </div>
    </Layout>
  );
};

export default Home;
