import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
import type { FC } from 'react';

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
        className="rounded-md bg-brand-onyx px-3 py-2 text-3xl
                  font-sans font-semibold tracking-widest text-brand-white outline
                  outline-1 outline-brand-yellow hover:bg-brand-onyx laptop:rounded-xl
                  laptop:bg-transparent laptop:outline-0 laptop:hover:outline-1"
      >
        {text}
      </div>
    </Link>
  );
};
export const NavMenu: FC = () => {
  // const { t } = useLocale();
  // const page = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const MenuItems = (props: { open: boolean }) => {
    return (
      <div
        id="nav menu"
        className={`${
          props.open ? '' : 'hidden '
        }absolute inset-y-28 right-4 flex flex-col items-end space-y-2 laptop:relative laptop:inset-y-0 laptop:flex-row laptop:space-x-6 laptop:space-y-0`}
      >
        <Item id="start" href="https://discord.gg/w3AyyvKypT/" text="JOIN" />
        <Item id="start" href="https://buidl.unchain.tech/" text="BUIDL" />
        <Item id="contact" href="/contact" text="CONTACT" />
      </div>
    );
  };

  return (
    <div className="mx-2 items-center desktop:mx-12">
      <div id="laptopmenu" className="hidden laptop:block">
        <MenuItems open />
      </div>
      <div id="mobilemenu" className="block laptop:hidden">
        <Hamburger rounded={true} toggled={isMenuOpen} toggle={setMenuOpen} />
        <MenuItems open={isMenuOpen} />
      </div>
    </div>
  );
};
