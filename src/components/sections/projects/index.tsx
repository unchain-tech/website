import Image from 'next/image';
import lessoncards_wide from 'public/projects_wide.png';
import lessoncards_widest from 'public/projects_widest.png';
import { FC } from 'react';

import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export const Projects: FC = () => {
  const { width } = useWindowDimensions();

  const BannerImage = () => {
    if (width! < 1025) {
      return (
        <Image
          src={lessoncards_wide}
          className="w-full"
          alt="UNCHAIN projects example"
          priority={true}
        />
      );
    } else {
      return (
        <Image
          src={lessoncards_widest}
          className="w-full"
          alt="UNCHAIN projects example"
          priority={true}
        />
      );
    }
  };

  return (
    <div id="start building" className="bg-brand-white text-brand-onyx">
      <div id="container" className="px-4 py-6 desktop:px-32 desktop:py-8">
        <div id="title" className="">
          <h3 className="text-brand-red desktop:text-6xl">
            Start learning and build
          </h3>
          <h3 className="text-brand-red desktop:text-6xl">your own project.</h3>
        </div>

        <div id="items" className="w-3/4 space-y-2 pt-4 desktop:pt-8">
          <p className="text-xs leading-relaxed desktop:text-lg">
            ✅ public
            chain上でdApp開発を実践できる、25の開発プロジェクトをオープンソースで提供
          </p>
          <p className="text-xs leading-relaxed desktop:text-lg">
            ✅ ブロックチェーンアプリの開発歴をNFTで証明
          </p>
        </div>
      </div>
      <div id="container" className="relative">
        <BannerImage />
        <div
          id="red bloc"
          className="-mt-24 h-28 bg-brand-red tablet:-mt-36 tablet:h-40 laptop:-mt-60 laptop:h-64 desktop:-mt-56 desktop:h-60 monitor:-mt-96 monitor:h-96"
        />
      </div>
    </div>
  );
};

export default Projects;
