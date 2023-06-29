import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Chain: FC<{ chain: string; url: string }> = ({ chain, url }) => {
  return (
    <Link href={url} target="_blank" passHref={true}>
      <Image
        src={`/chain/${chain}.png`}
        alt={`${chain} logo`}
        width="0"
        height="0"
        sizes="100vh"
        className="h-full w-auto"
      />
    </Link>
  );
};

export const SupportedNetworks: FC = () => {
  const chains = [
    'astar',
    'avalanche',
    'ethereum',
    'icp',
    'near',
    'polygon',
    'solana',
    'xrpl',
  ];
  const links = [
    'https://astar.network/',
    'https://www.avax.network/',
    'https://ethereum.org/',
    'https://internetcomputer.org/',
    'https://near.org/',
    'https://polygon.technology/',
    'https://solana.com/',
    'https://xrpl.org/',
  ];
  return (
    <div id="supported networks" className="bg-brand-white">
      <div id="container" className="relative overflow-x-hidden">
        <div
          className="relative flex animate-marquee items-center min-w-[1201px]
          p-2 space-x-4 laptop:p-4 laptop:space-x-8"
        >
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
        <div
          className="absolute top-0 flex animate-marquee2 items-center min-w-[1201px]
          p-2 space-x-4 laptop:p-4 laptop:space-x-8"
        >
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedNetworks;
