import Image from 'next/image';
import Link from 'next/link';
import UNCHAIN_icon from 'public/UNCHAIN_icon.png';
import { FC } from 'react';

import Events from './events';

import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export const Joinus = () => {
  const { width } = useWindowDimensions();

  const Slogan: FC<{ text: string; className?: string }> = ({
    className,
    text,
  }) => {
    return (
      <h2
        className={`z-10 text-[84px] font-light leading-none laptop:text-[112px] desktop:text-[144px] ${className}`}
      >
        {text}
      </h2>
    );
  };

  return (
    <div id="Join us" className="relative bg-brand-onyx text-brand-white">
      <div id="container" className="space-y-8 px-6 pb-16">
        <Events />
        <div
          id="slogan and logo"
          className="flex flex-row justify-between pt-16"
        >
          <div id="slogan" className="flex flex-col py-4">
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
            <button className="btn flex items-center space-x-2 bg-brand-red px-16 py-4 text-2xl hover:bg-brand-blue">
              <p>Join UNCHAIN</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Joinus;
