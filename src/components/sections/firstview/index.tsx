import Link from 'next/link';
import { FC, useState } from 'react';

import SupportedNetworks from './supportednetworks';

export const FirstView: FC = () => {
  const DeprecationNotice = () => {
    const [isModalClosed, setModalClose] = useState(false);

    return (
      <div
        className={`fixed bg-brand-onyx text-start top-[16vh] left-[2vw] max-w-[96vw] z-20 ${
          isModalClosed ? 'hidden' : ''
        }`}
      >
        <button
          className="absolute -top-8 left-0 text-2xl text-warning"
          onClick={() => {
            setModalClose(true);
          }}
        >
          x
        </button>
        <div className="border border-warning rounded p-2 leading-loose">
          <p>
            2024/01/31をもちまして、株式会社shiftbaseによるUNCHAINのサービス提供は終了いたします。
            <br />
            以後の問い合わせや運営については、UNCHAIN
            discordより直接ご連絡ください。
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="firstview"
      className="supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] flex flex-col justify-end space-y-12" // works with mobile viewports too
    >
      <DeprecationNotice />

      <div id="section container" className="px-6 desktop:px-32">
        <div id="slogan" className="pb-4 pt-8">
          <h1 className="text-brand-yellow">
            UNCHAIN
            <div className="text-white">your</div>
            <div className="text-white">potential.</div>
          </h1>
        </div>

        <p
          id="blurb"
          className="w-5/6 py-2 text-base laptop:w-1/2 desktop:py-4 desktop:text-lg"
        >
          UNCHAINは、プロジェクト開発を通して技術を学び、実践経験を積むことで自分のアイデアを形にする力を身につける、エンジニアのための有志コミュニティです。
        </p>

        <Link
          id="start_building"
          href="https://github.com/unchain-tech/UNCHAIN-projects/"
          passHref
        >
          <button className="btn my-2 bg-brand-red px-12 hover:bg-brand-blue desktop:my-4">
            Start Building
          </button>
        </Link>
      </div>
      <SupportedNetworks />
    </div>
  );
};

export default FirstView;
