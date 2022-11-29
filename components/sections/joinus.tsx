import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { useWindowDimensions } from 'hooks/useWindowDimensions';
import UNCHAIN_icon from 'public/UNCHAIN_icon_white.png';

const Slogan: FC<{ text: string; className?: string }> = ({
  className,
  text,
}) => {
  return (
    <h1
      className={`font-light text-[84px] laptop:text-[120px] desktop:text-[144px] leading-none z-10 ${className}`}
    >
      {text}
    </h1>
  );
};

export const Joinus = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="Join us" className="relative bg-brand-onyx text-brand-white">
      <div id="container" className="px-6 py-16">
        <div id="slogan and logo" className="flex flex-row justify-between">
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
            className="absolute top-0 right-0 block laptop:hidden"
            width={width ? width / 3 : 150}
            height={width ? width / 3 : 150}
          />
          <Image
            src={UNCHAIN_icon}
            alt="UNCHAIN logo"
            className="absolute right-0 hidden laptop:block"
            width={width ? width / 4 : 480}
            height={width ? width / 4 : 480}
          />
        </div>
        <Link
          href="https://airtable.com/shrKEXFRup9ZqF3GY"
          passHref={true}
          target="_blank"
          className="flex justify-center hover:no-underline"
        >
          <button className="btn bg-brand-red hover:bg-brand-blue mt-16 desktop:mt-32 px-16 py-4 text-2xl">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Joinus;
