import Image from 'next/image';
import { FC } from 'react';

import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavMenu } from './navmenu';
import UNCHAIN_logo from '/public/logo/UNCHAIN_logo_ondark.png';

import { useRouteRedirect } from '@/hooks/useRouteRedirect';

export const Header: FC = () => {
  const { redirect } = useRouteRedirect();

  return (
    <header className="header desktop:px-8">
      {/*Logo*/}
      <button type="button" onClick={() => redirect('/')}>
        <Image
          className="cursor-pointer rounded-full"
          alt="UNCHAIN logo"
          src={UNCHAIN_logo}
          width={240}
          height={100}
        />
      </button>
      <NavMenu />
      {/* Language */}
      <div className="flex items-center space-x-2">
        <LanguageSwitcher locale="en" />
        <span>/</span>
        <LanguageSwitcher locale="ja" />
      </div>
    </header>
  );
};

export default Header;
