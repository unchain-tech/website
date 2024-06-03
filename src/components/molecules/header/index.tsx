import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { NavMenu } from './navmenu';
import UNCHAIN_logo from '/public/logo/UNCHAIN_logo.png';

export const Header: FC = () => {
  return (
    <header className="header desktop:px-8">
      {/*Logo*/}
      <Link href="/" passHref={true}>
        <Image
          className="cursor-pointer rounded-full"
          alt="UNCHAIN logo"
          src={UNCHAIN_logo}
          width={240}
          height={100}
        />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
