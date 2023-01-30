import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { SiDiscord } from 'react-icons/si';

import News from 'components/molecules/news';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import UNCHAIN_icon from 'public/UNCHAIN_icon.png';

export const Joinus = () => {
  const { width } = useWindowDimensions();

  const Slogan: FC<{ text: string; className?: string }> = ({
    className,
    text,
  }) => {
    return (
      <h1
        className={`font-light text-[84px] laptop:text-[112px] desktop:text-[144px] leading-none z-10 ${className}`}
      >
        {text}
      </h1>
    );
  };

  return (
    <div id="Join us" className="relative bg-brand-onyx text-brand-white">
      <div id="container" className="px-6 space-y-8 pb-16">
        <News />
        <div
          id="slogan and logo"
          className="pt-16 flex flex-row justify-between"
        >
          <div id="slogan" className="py-4 flex flex-col">
            <Slogan text="Join" />
            <Slogan className="ml-32 desktop:ml-64" text="the" />
            <div className="flex flex-col laptop:flex-row">
              <Slogan text="comm" />
              <Slogan text="unity." />
            </div>
          </div>
          <Image
            src={UNCHAIN_icon}
            alt="UNCHAIN logo"
            className="absolute right-6"
            width={width! / 4}
            height={width! / 4}
          />
        </div>

        <div className="flex justify-center hover:no-underline">
          <Link id="join_community" href="/api/apply" passHref>
            <button className="btn bg-brand-red hover:bg-brand-blue px-16 py-4 text-2xl flex items-center space-x-2">
              <SiDiscord />
              <p>Join our Discord</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Joinus;
