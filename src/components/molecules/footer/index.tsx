import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

export const Footer: FC = () => {
  const Socials = () => {
    return (
      <div className="space-x-4">
        <SocialIcon
          url="https://twitter.com/UNCHAIN_tech"
          bgColor="white"
          fgColor="#1DA1F2"
          label="Twitter"
          target="_blank"
          rel="noreferrer"
          style={{ height: 72, width: 72 }}
        />
        <SocialIcon
          url="https://discord.gg/w3AyyvKypT"
          bgColor="white"
          fgColor="#7289DA"
          label="Discord"
          target="_blank"
          rel="noreferrer"
          style={{ height: 72, width: 72 }}
        />
        <SocialIcon
          url="https://github.com/unchain-tech"
          bgColor="transparent"
          fgColor="#000000"
          label="Github"
          target="_blank"
          rel="noreferrer"
          style={{ height: 72, width: 72 }}
        />
      </div>
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-4">
      <div className="space-y-2 text-center">
        <Socials />
        <a
          href="https://unchain-tech.notion.site/press-kit-45cd241d7ae64937882e36b93e794e45?pvs=4"
          className="font-sans text-black"
          target="_blank"
          rel="noreferrer"
        >
          press kit
        </a>
        <div className="font-sans text-sm text-black desktop:text-base">
          2022 - {currentYear} &copy; UNCHAIN
        </div>
      </div>
    </footer>
  );
};

export default Footer;
