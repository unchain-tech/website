import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Chain: FC<{ chain: string; url: string }> = ({ chain, url }) => {
  return (
    <Link href={url} target="_blank" passHref={true}>
      <Image
        src={`/chain/${chain}.png`}
        alt={`${chain} logo`}
        width={240}
        height={120}
        sizes="100vh"
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
    'xrpl',
    'solana',
  ];
  const links = [
    'https://astar.network/',
    'https://www.avax.network/',
    'https://ethereum.org/',
    'https://internetcomputer.org/',
    'https://near.org/',
    'https://polygon.technology/',
    'https://xrpl.org/',
    'https://solana.com/',
  ];
  return (
    <div id="supported networks" className="bg-brand-white">
      <div id="container" className="relative overflow-x-hidden">
        <div
          className="relative flex animate-marquee
                    items-center p-2 space-x-8 laptop:p-4 min-w-[1201px]"
        >
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
        <div
          className="absolute top-0 flex animate-marquee2
                    items-center p-2 space-x-8 laptop:p-4 min-w-[1201px]"
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
