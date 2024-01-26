import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

export const Footer: FC = () => {
  const Socials = () => {
    return (
      <div className="space-x-4">
        <SocialIcon
          url="https://discord.gg/w3AyyvKypT"
          bgColor="white"
          fgColor="#7289DA"
          label="Discord"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url="https://github.com/unchain-tech"
          bgColor="transparent"
          fgColor="#000000"
          label="Github"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-white">
      <div className="text-center space-y-2">
        <Socials />
        <div className="font-sans text-black text-sm desktop:text-base">
          {currentYear} &copy; UNCHAIN - Licensed under MIT license.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
