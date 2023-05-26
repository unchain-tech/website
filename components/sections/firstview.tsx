import Link from 'next/link';

import { FC } from 'react';

import SupportedNetworks from 'components/molecules/supportednetworks';

export const FirstView: FC = () => {
  return (
    <div
      id="firstview"
      className="supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]" // works with mobile viewports too
    >
      <div
        id="section container"
        className="absolute bottom-16 px-6 laptop:bottom-24 desktop:bottom-48 desktop:px-32"
      >
        <div id="slogan" className="pb-4 pt-8">
          <h1 className="text-brand-yellow">
            UNCHAIN
            <div className="text-white">your</div>
            <div className="text-white">potential.</div>
          </h1>
        </div>

        <p
          id="blurb"
          className="w-5/6 py-2 text-xs desktop:w-1/2 desktop:py-4 desktop:text-lg"
        >
          UNCHAINは、プロジェクト開発を通して技術を学び、実践経験を積むことで自分のアイデアを形にする力を身につけたい、エンジニアのための学習サービス
          & コミュニティです。
        </p>

        <Link id="start_building" href="https://app.unchain.tech/" passHref>
          <button className="btn my-2 bg-brand-red px-12 hover:bg-brand-blue desktop:my-4">
            Start Building
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0">
        <SupportedNetworks />
      </div>
    </div>
  );
};

export default FirstView;
