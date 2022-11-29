import Image from 'next/image';

import lessoncards from 'public/projects.png';
import lessoncards_wide from 'public/projects_wide.png';

export const Projects = () => {
  return (
    <div id="start building" className="bg-brand-white text-brand-onyx py-16">
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
      <div className="block tablet:hidden">
        <Image src={lessoncards} className="w-full" alt="" priority={true} />
      </div>
      <div className="hidden tablet:block">
        <Image
          src={lessoncards_wide}
          className="w-full"
          alt=""
          priority={true}
        />
      </div>
    </div>
  );
};

export default Projects;
