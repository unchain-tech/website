import Image from 'next/image';

import { FC } from 'react';

import SupportedNetworks from 'components/molecules/supportednetworks';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import lessoncards_wide from 'public/projects_wide.png';
import lessoncards_widest from 'public/projects_widest.png';

export const Projects: FC = () => {
  const { width } = useWindowDimensions();

  const BannerImage = () => {
    if (width! < 481) {
      return <div />;
    } else if (width! < 1025) {
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
    <div
      id="start building"
      className="bg-brand-white text-brand-onyx pt-10 laptop:pt-16"
    >
      <div id="container" className="px-6 desktop:px-32">
        <div id="title" className="pb-8">
          <h3 className="text-brand-red desktop:text-6xl">
            Start learning and build
          </h3>
          <h3 className="text-brand-red desktop:text-6xl">your own project.</h3>
        </div>

        <div id="items" className="space-y-2 w-3/4">
          <p className="font-medium tracking-tight">
            ✅ public chain上でdApp開発を実践できる22の学習コンテンツを提供
          </p>
          <p className="font-medium tracking-tight">
            ✅ web3プロダクトの開発歴を証明するNFTを現時点で500枚以上発行
          </p>
        </div>
      </div>
      <div id="container" className="relative">
        <BannerImage />
        <div
          id="red bloc"
          className="bg-brand-red h-0 tablet:h-40 tablet:-mt-36 laptop:-mt-60 laptop:h-64 desktop:-mt-56 desktop:h-60 monitor:-mt-96 monitor:h-96"
        ></div>
      </div>
      <SupportedNetworks />
    </div>
  );
};

export default Projects;
