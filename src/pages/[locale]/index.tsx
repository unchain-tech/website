import Image from 'next/image';
import thumbnailNFT from 'public/thumbnail_nft.png';
import { FC } from 'react';

import Layout from '@/components/layouts/baseLayout';
import FirstView from '@/components/sections/firstview';
import Joinus from '@/components/sections/joinus';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';

// import Supporters from '@/components/sections/supporters';

export const Home: FC = () => {
  return (
    <Layout pageTitle="Home">
      <Image
        src={thumbnailNFT}
        alt="A thumbnail image of UNCHAIN NFTs"
        className="invisible absolute right-0 -z-10 tablet:visible"
        width={640}
        height={640}
      />

      <div id="body">
        <FirstView />
        <Projects />
        <Services />
        {/* <Supporters /> */}
        <Joinus />
      </div>
    </Layout>
  );
};

export default Home;
