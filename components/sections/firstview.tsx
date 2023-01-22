import Link from 'next/link';

import { FC } from 'react';

import SupportedNetworks from 'components/molecules/supportednetworks';

export const FirstView: FC = () => {
  return (
    <div id="firstview">
      <div id="section container" className="h-screen">
        <div id="first view" className="px-6 desktop:px-32 absolute bottom-48">
          <div id="slogan" className="pt-8 pb-4">
            <h1 className="text-brand-yellow">UNCHAIN</h1>
            <h1>your</h1>
            <h1 className="">potential.</h1>
          </div>

          <p
            id="blurb"
            className="text-xs desktop:text-lg py-2 desktop:py-4 w-5/6 desktop:w-1/2"
          >
            UNCHAINは、プロジェクト開発を通して技術を学び、実践経験を積むことで自分のアイデアを形にする力を身につけたい、エンジニアのための学習サービス
            & コミュニティです。
          </p>

          <Link href="https://app.unchain.tech/" passHref>
            <button className="btn bg-brand-red hover:bg-brand-blue my-2 desktop:my-4 px-12">
              Start Building
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0">
          <SupportedNetworks />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
