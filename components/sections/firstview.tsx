import Link from 'next/link';

import { FC } from 'react';

import News from 'components/molecules/news';

export const Landing: FC = () => {
  return (
    <div id="firstview">
      <div
        id="section container"
        className="pt-96 desktop:pt-96 pb-8 px-6 desktop:px-32"
      >
        <div id="first view" className="pb-8">
          <div id="slogan" className="pt-8 pb-4">
            <h1 className="text-brand-yellow">UNCHAIN</h1>
            <h1>your</h1>
            <h1 className="">potential.</h1>
          </div>

          <p
            id="blurb"
            className="text-xs desktop:text-lg py-2 desktop:py-4 w-5/6 desktop:w-1/2"
          >
            UNCHAINは、NFTの作成やdAppsの構築など、プロジェクト開発を通してweb3を学び、実践経験を積みながら自分のアイデアを形にする力を身につけるエンジニアのためのコミュニティです。
          </p>

          <Link
            href="https://airtable.com/shrKEXFRup9ZqF3GY"
            passHref={true}
            target="_blank"
          >
            <button className="btn bg-brand-red hover:bg-brand-blue my-2 desktop:my-4">
              Join the community
            </button>
          </Link>
        </div>
        <News />
      </div>
    </div>
  );
};

export default Landing;
