import { Spin as Hamburger } from 'hamburger-react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';
import type { FC } from 'react';

import { useLocale } from 'hooks/useLocale';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

const Item: FC<{
  id: string;
  href: string;
  text: string;
  newpage?: boolean;
}> = ({ id, href, text, newpage }) => {
  return (
    <Link
      id={id}
      href={href}
      passHref={true}
      target={newpage ? '_blank' : '_self'}
      className="hover:no-underline"
    >
      <div
        className="py-2 px-3 rounded-md laptop:rounded-xl
                  border laptop:border-0 laptop:hover:border border-brand-yellow
                  font-sans font-semibold tracking-widest text-brand-white
                bg-brand-onyx laptop:bg-transparent hover:bg-brand-onyx"
      >
        {text}
      </div>
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

        {/* TODO: add after portal 2nd release */}
        <Item id="login" href="https://app.unchain.tech/" text="Login" />
        <Item id="signup" href="https://app.unchain.tech/" text="Signup" />

        {/* contact */}
        <Item
          id="contact"
          href="https://shiftbase.xyz/contact"
          text="Contact"
          newpage
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
