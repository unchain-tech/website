import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import shiftbase_logo from 'public/sb_logoname.png';

export const Footer: FC = () => {
  const companyName = '株式会社shiftbase';
  const currentYear = new Date().getFullYear();

  const urls = [
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-aed99b6ac88642abae05b98d821edda8',
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-fa9d10f2a932424eb33a46f927f92d9f',
    'https://shiftbase.xyz/',
  ];
  const texts = ['Terms & Conditions', 'Privacy Policy', 'About shiftbase'];

  return (
    <footer className="py-4">
      <div
        id="shiftbase"
        className="bg-brand-white text-brand-onyx px-4 py-12 space-y-4"
      >
        <div id="company" className="space-y-2">
          <Image
            src={shiftbase_logo}
            alt="shiftbase logo"
            width={240}
            height={80}
          />
          <h2 id="company" className="font-sans font-medium">
            株式会社shiftbase
          </h2>
          <p id="address" className="font-sans text-lg">
            〒160-0011 新宿区若葉1-7-15
          </p>
        </div>
        <div id="links" className="flex flex-col space-y-2">
          {texts.map((t, i) => {
            return (
              <div key={`${t}`}>
                <Link
                  href={urls[i]}
                  passHref={true}
                  className="cursor-pointer font-sans hover:text-brand-blue"
                  target="_blank"
                >
                  {t}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-6 text-center text-sm desktop:text-base font-sans">
        {currentYear} &copy; {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
