import Link from 'next/link';
import { FC } from 'react';

import { Company } from './Company';
import { Socials } from './Socials';

export const Footer: FC = () => {
  const companyName = '株式会社shiftbase';
  const currentYear = new Date().getFullYear();

  const urls = [
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-aed99b6ac88642abae05b98d821edda8',
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-fa9d10f2a932424eb33a46f927f92d9f',
    'https://shiftbase.xyz/careers',
    'https://shiftbase.xyz/',
  ];
  const texts = [
    'Terms & Conditions',
    'Privacy Policy',
    'Careers',
    'About shiftbase',
  ];

  return (
    <footer className="py-4">
      <div
        id="shiftbase"
        className="space-y-4 bg-brand-white px-4 py-4 text-brand-onyx"
      >
        <div className="flex justify-between">
          <Company />
          <Socials />
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

      <div className="mx-auto mt-6 text-center font-sans text-sm desktop:text-base">
        {currentYear} &copy; {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
