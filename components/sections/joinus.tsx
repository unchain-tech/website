import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import Events from 'components/molecules/events';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import UNCHAIN_icon from 'public/UNCHAIN_icon.png';

export const Joinus = () => {
  const { width } = useWindowDimensions();

  const Slogan: FC<{ text: string; className?: string }> = ({
    className,
    text,
  }) => {
    return (
      <h2
        className={`font-light text-[84px] laptop:text-[112px] desktop:text-[144px] leading-none z-10 ${className}`}
      >
        {text}
      </h2>
    );
  };

  return (
    <div id="Join us" className="relative bg-brand-onyx text-brand-white">
      <div id="container" className="px-6 space-y-8 pb-16">
        <Events />
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
          <Link id="join_community" href="https://app.unchain.tech/" passHref>
            <button className="btn bg-brand-red hover:bg-brand-blue px-16 py-4 text-2xl flex items-center space-x-2">
              <p>Join UNCHAIN</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Joinus;
