import Image from 'next/image';
import Link from 'next/link';
import shiftbase_logo from 'public/sb_logoname.png';
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

export const Footer: FC = () => {
  const Socials = () => {
    return (
      <div className="flex gap-4 p-2">
        <SocialIcon
          url="https://twitter.com/UNCHAIN_tech"
          bgColor="#1DA1F2"
          fgColor="transparent"
          label="Twitter"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url="https://discord.gg/w3AyyvKypT"
          bgColor="#7289DA"
          fgColor="white"
          label="Discord"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url="https://github.com/unchain-tech"
          bgColor="#000000"
          fgColor="transparent"
          label="Github"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    );
  };

  const SbProdTag = () => {
    return (
      <div id="company" className="flex items-center">
        <h3 className="font-sans">powered by</h3>
        <Image src={shiftbase_logo} alt="shiftbase logo" width={160} />
      </div>
    );
  };

  const urls = [
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-aed99b6ac88642abae05b98d821edda8',
    'https://unchain-shiftbase.notion.site/UNCHAIN-20230126-fa9d10f2a932424eb33a46f927f92d9f',
    '/about/sct',
    'https://shiftbase.xyz/careers',
    'https://shiftbase.xyz/',
  ];
  const texts = [
    'Terms & Conditions',
    'Privacy Policy',
    'SCT Disclosure',
    'Careers',
    'About shiftbase',
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div
        id="shiftbase"
        className="space-y-4 bg-brand-white px-4 py-4 text-brand-onyx"
      >
        <div className="flex flex-col-reverse items-center laptop:flex-row laptop:justify-between">
          <SbProdTag />
          <Socials />
        </div>

        <div id="links" className="flex flex-col space-y-2">
          {texts.map((t, i) => {
            return (
              <div key={`${t}`}>
                <Link
                  href={urls[i]}
                  passHref={true}
                  className="cursor-pointer font-sans hover:text-brand-blue text-base font-normal"
                  target={urls[i].slice(0, 1) === '/' ? '_self' : '_blank'}
                >
                  {t}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-6 text-center font-sans text-sm desktop:text-base">
        {currentYear} &copy; shiftbase Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
