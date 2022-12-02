import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { useWindowDimensions } from 'hooks/useWindowDimensions';
import UNCHAIN_icon from 'public/UNCHAIN_icon_white.png';

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
      <div id="container" className="px-6 py-16 space-y-8">
        <div id="slogan and logo" className="flex flex-row justify-between">
          <div id="slogan" className="py-4 flex flex-col">
            <Slogan text="Join" />
            <Slogan className="ml-32 desktop:ml-64" text="the" />
            <div className="flex flex-col laptop:flex-row">
              <Slogan text="comm" />
              <Slogan text="unity." />
            </div>
          </div>

          {width! > 769 ? (
            <Image
              src={UNCHAIN_icon}
              alt="UNCHAIN logo"
              className="absolute right-0"
              width={width! / 4}
              height={width! / 4}
            />
          ) : (
            <Image
              src={UNCHAIN_icon}
              alt="UNCHAIN logo"
              className="absolute top-5 right-0"
              width={width! / 3}
              height={width! / 3}
            />
          )}
        </div>
        <div className="flex justify-center hover:no-underline">
          <Link
            href="https://airtable.com/shrKEXFRup9ZqF3GY"
            passHref={true}
            target="_blank"
          >
            <button className="btn bg-brand-red hover:bg-brand-blue px-16 py-4 text-2xl">
              Apply for entry
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Joinus;
