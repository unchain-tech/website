import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

export const Services: FC = () => {
  const Card = ({
    iconType,
    heading,
    description,
  }: {
    [key: string]: string;
  }) => {
    return (
      <div
        id="card"
        className="bg-brand-onyx text-brand-white border-4 border-brand-pink rounded-[36px] p-8"
      >
        <Image
          src={`/flowerbutton${iconType}.png`}
          alt=""
          width={64}
          height={64}
          className="pb-4"
        />
        <h2 className="pb-4">{heading}</h2>
        <p className="font-thin">{description}</p>
      </div>
    );
  };
  return (
    <div id="what we offer" className="bg-brand-yellow text-brand-onyx">
      <div id="container" className="px-6 desktop:px-32 py-8 desktop:py-16">
        <div
          id="sectiontitle"
          className="flex flex-col desktop:flex-row desktop:space-x-6"
        >
          <h2 className="text-4xl desktop:text-6xl">learn.</h2>
          <h2 className="text-4xl desktop:text-6xl">collaborate.</h2>
          <h2 className="text-4xl desktop:text-6xl">prove.</h2>
        </div>

        <div
          id="sectionbody"
          className="py-16 grid grid-flow-row gap-4 desktop:grid-flow-col desktop:gap-16"
        >
          <Card
            iconType="1"
            heading="プロジェクト型の学習"
            description="プロジェクト型の学習コンテンツを通して、スマートコントラクトやweb開発の実践的なスキルを身につけることができます。"
          />
          <Card
            iconType="2"
            heading="共に学ぶコミュニティ"
            description="同じ興味や志を持つ仲間を見つけ、互いの知見を共有し合うことで、切磋琢磨することができます。"
          />
          <Card
            iconType="3"
            heading="NFTで学習歴を証明"
            description="各メンバーのコミュニティでの活動や貢献の証を、トークンを用いてブロックチェーン上に発行しています。"
          />
        </div>

        <div id="button" className="flex justify-center">
          <Link
            id="learn_more"
            href="https://unchain-shiftbase.notion.site/web3-UNCHAIN-964d92e24cd045bcbdd8848203985ba7"
            passHref={true}
            target="_blank"
          >
            <button className="btn px-12 text-brand-white bg-neutral-700 hover:bg-brand-blue desktop:px-12 desktop:py-4">
              Learn more about UNCHAIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
