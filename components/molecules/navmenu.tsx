import { Spin as Hamburger } from 'hamburger-react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';
import type { FC } from 'react';

import { useLocale } from 'hooks/useLocale';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

const Item: FC<{ href: string; text: string; newpage: boolean }> = ({
  href,
  text,
  newpage,
}) => {
  return (
    <Link
      className="w-full rounded-md border-2 border-neutral-500 bg-neutral-600 py-2 px-3 text-right font-sans font-semibold tracking-widest text-brand-white hover:bg-neutral-600 laptop:w-auto laptop:rounded-xl laptop:border-0 laptop:bg-transparent laptop:text-xl"
      href={href}
      passHref={true}
      target={newpage ? '_blank' : '_self'}
    >
      {text}
    </Link>
  );
};
export const NavMenu: FC = () => {
  const { t } = useLocale();
  const page = useRouter();

  const { width } = useWindowDimensions();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const MenuItems = () => {
    return (
      <div
        id="nav menu"
        className="absolute inset-y-16 right-4 flex flex-col items-end space-y-1 laptop:relative laptop:inset-y-0 laptop:flex-row laptop:space-y-0 laptop:space-x-6"
      >
        {/* for clients */}
        {/* <Link className="header-menuitem" href="/clients">
          For clients
        </Link> */}

        {/* shiftbase */}
        <Item
          href="https://shiftbase.xyz"
          text="shiftbase, inc."
          newpage={true}
        />

        {/* contact */}
        <Item
          href="https://shiftbase.xyz/contact"
          text="Contact"
          newpage={true}
        />

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
