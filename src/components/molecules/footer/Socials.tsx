import { SocialIcon } from 'react-social-icons';

export const Socials = () => {
  return (
    <div className="flex justify-end gap-4 p-2">
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
