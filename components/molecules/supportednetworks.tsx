import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { useWindowDimensions } from 'hooks/useWindowDimensions';

const Chain: FC<{ chain: string; url: string }> = ({ chain, url }) => {
  const { width } = useWindowDimensions();
  return (
    <Link href={url} target="_blank" passHref={true}>
      <Image
        src={`/chain/${chain}.png`}
        alt={`${chain} logo`}
        width={width! > 481 ? 240 : 120}
        height={60}
      />
    </Link>
  );
};

export const SupportedNetworks = () => {
  const chains = [
    'astar',
    'avalanche',
    'ethereum',
    'icp',
    'near',
    'polygon',
    'solana',
  ];
  const links = [
    'https://astar.network/',
    'https://www.avax.network/',
    'https://ethereum.org/',
    'https://internetcomputer.org/',
    'https://near.org/',
    'https://polygon.technology/',
    'https://solana.com/',
  ];
  return (
    <div id="supported networks" className="bg-brand-white">
      <div id="container" className="overflow-x-hidden relative">
        <div className="flex flex-row items-center px-1 py-2 laptop:p-4 space-x-2 laptop:space-x-8 animate-marquee">
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
        <div className="absolute top-0 flex flex-row items-center px-1 py-2 laptop:p-4 space-x-2 laptop:space-x-8 animate-marquee2">
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedNetworks;
