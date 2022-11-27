import Image from 'next/image';
import Link from 'next/link';

import flowerbutton from '/public/flowerbutton.png';

export const Services = () => {
  const Card = ({ heading, description }: { [key: string]: string }) => {
    return (
      <div
        id="card"
        className="bg-brand-onyx text-brand-white border-4 border-brand-pink rounded-[36px] p-8"
      >
        <Image
          src={flowerbutton}
          alt=""
          width={64}
          height={64}
          className="pb-4"
        />
        <h3 className="pb-4">{heading}</h3>
        <p className="font-thin">{description}</p>
      </div>
    );
  };
  return (
    <div id="what we offer" className="bg-brand-yellow text-brand-onyx">
      <div
        id="container"
        className="px-6 laptop:px-12 desktop:px-32 py-8 desktop:py-24"
      >
        <div
          id="sectiontitle"
          className="flex flex-col pb-8 desktop:flex-row desktop:space-x-6"
        >
          <h2>learn.</h2>
          <h2>collaborate.</h2>
          <h2>prove.</h2>
        </div>

        <div
          id="sectionbody"
          className="flex flex-col space-y-4 desktop:flex-row desktop:space-y-0 desktop:space-x-16 pb-8"
        >
          <Card
            heading="プロジェクト型の学習"
            description="プロジェクト型の学習コンテンツを通して、スマートコントラクトやweb開発の実践的なスキルを身につけることができます。"
          />
          <Card
            heading="共に学ぶコミュニティ"
            description="プロジェクト型の学習コンテンツを通して、スマートコントラクトやweb開発の実践的なスキルを身につけることができます。"
          />
          <Card
            heading="NFTで学習歴を証明"
            description="プロジェクト型の学習コンテンツを通して、スマートコントラクトやweb開発の実践的なスキルを身につけることができます。"
          />
        </div>

        <div id="button" className="mt-6 flex justify-center">
          <Link href="/learn" passHref={true}>
            <button className="btn px-12 text-brand-white bg-neutral-700 hover:bg-brand-blue desktop:px-24 desktop:py-6">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
