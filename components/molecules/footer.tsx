import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import shiftbase_logo from 'public/sbicon.png';

export const Footer: FC = () => {
  const companyName = 'shiftbase, inc';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div
        id="shiftbase"
        className="bg-brand-white text-brand-onyx px-4 py-12 space-y-4"
      >
        <div id="info" className="space-y-2">
          <Image
            src={shiftbase_logo}
            alt="shiftbase logo"
            width={160}
            height={160}
          />
          <h2 id="company" className="font-sans font-medium">
            shiftbase, Inc.
          </h2>
          <p id="address" className="font-sans">
            〒160-0011 新宿区若葉1-7-15
          </p>
        </div>
        <div id="links" className="flex flex-col space-y-2">
          <Link
            href="https://www.notion.so/unchain-shiftbase/20220228-437efe5314d64e0f965efe911b062ce2"
            passHref={true}
            className="cursor-pointer font-sans hover:text-brand-blue"
            target="_blank"
          >
            Terms & Conditions
          </Link>
          <Link
            href="https://www.notion.so/unchain-shiftbase/20220303-11d1b7d0e0384aa9912b6893decd51dc"
            passHref={true}
            className="cursor-pointer font-sans hover:text-brand-blue"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://shiftbase.xyz/about"
            passHref={true}
            className="cursor-pointer font-sans hover:text-brand-blue"
            target="_blank"
          >
            About shiftbase
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-6 text-center text-sm desktop:text-base font-sans">
        {currentYear} &copy; {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
