import Image from 'next/image';

import { FC } from 'react';

import SupportedNetworks from 'components/molecules/supportednetworks';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import lessoncards_wide from 'public/projects_wide.png';
import lessoncards_widest from 'public/projects_widest.png';

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
    <div id="start building" className="bg-brand-white text-brand-onyx ">
      <div id="container" className="px-4 py-6 desktop:px-32 desktop:py-8">
        <div id="title" className="pt-4 desktop:pt-8">
          <h3 className="text-brand-red desktop:text-6xl">
            Start learning and build
          </h3>
          <h3 className="text-brand-red desktop:text-6xl">your own project.</h3>
        </div>

        <div id="items" className="pt-4 desktop:pt-8 space-y-2 w-3/4">
          <p className="text-xs leading-relaxed desktop:text-lg">
            ✅ public chain上でdApp開発を実践できる22の学習コンテンツを提供
          </p>
          <p className="text-xs leading-relaxed desktop:text-lg">
            ✅ web3プロダクトの開発歴を証明するNFTを現時点で500枚以上発行
          </p>
        </div>
      </div>
      <div id="container" className="relative">
        <BannerImage />
        <div
          id="red bloc"
          className="bg-brand-red -mt-24 h-28 tablet:h-40 tablet:-mt-36 laptop:-mt-60 laptop:h-64 desktop:-mt-56 desktop:h-60 monitor:-mt-96 monitor:h-96"
        />
      </div>
      <SupportedNetworks />
    </div>
  );
};

export default Projects;
