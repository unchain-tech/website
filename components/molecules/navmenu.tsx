import { Spin as Hamburger } from 'hamburger-react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';
import type { FC } from 'react';

import { useLocale } from 'hooks/useLocale';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

export const NavMenu: FC = () => {
  const { t } = useLocale();
  const page = useRouter();

  const { width } = useWindowDimensions();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const MenuItems = () => {
    return (
      <div className="absolute inset-y-16 right-4 flex flex-col items-end space-y-1 laptop:relative laptop:inset-y-0 laptop:flex-row laptop:space-y-0 laptop:space-x-6">
        {/* for clients */}
        {/* <Link className="header-menuitem" href="/clients">
          For clients
        </Link> */}

        {/* shiftbase */}
        <Link
          className="header-menuitem"
          href="https://shiftbase.xyz"
          passHref={true}
          target="_blank"
        >
          shiftbase, inc.
        </Link>

        {/* contact */}
        <Link
          className="header-menuitem"
          href="https://shiftbase.xyz/contact"
          passHref={true}
          target="_blank"
        >
          Contact
        </Link>

        {/* language switch */}
        {/* <Link
          className="header-menuitem"
          href={t.LOCALESWITCH + page.pathname}
          locale={t.LOCALESWITCH}
          passHref={true}
        >
          {t.MENU.LANGUAGE}
        </Link> */}
      </div>
    );
  };

  return (
    <div className="mx-2 items-center desktop:mx-12">
      {width! > 769 ? (
        <MenuItems />
      ) : isMenuOpen ? (
        <>
          <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
          <MenuItems />
        </>
      ) : (
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
      )}
    </div>
  );
};
