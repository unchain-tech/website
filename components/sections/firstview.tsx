import Link from 'next/link';

import { FC } from 'react';

export const Landing: FC = () => {
  return (
    <div id="firstview">
      <div id="container" className="px-6 pb-8 laptop:px-12 desktop:px-32">
        <div id="slogan" className="pt-4 pb-2 desktop:pt-0 desktop:pb-8">
          <h1 className="text-brand-yellow">unchain</h1>
          <h1>your</h1>
          <h1 className="">potential.</h1>
        </div>
        <p id="blurb" className="w-5/6 py-2 desktop:py-4 desktop:w-2/5">
          UNCHAINは、NFTの作成やdAppsの構築など、プロジェクト開発を通してweb3を学び、実践経験を積みながら自分のアイデアを形にする力を身につけるエンジニアのためのコミュニティです。
        </p>
        <Link
          href="https://airtable.com/shrKEXFRup9ZqF3GY"
          passHref={true}
          target="_blank"
        >
          <button className="btn bg-brand-red hover:bg-brand-blue my-2 desktop:mb-4">
            Join the community
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
