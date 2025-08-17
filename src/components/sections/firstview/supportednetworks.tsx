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
        className="h-full w-72"
      />
    </Link>
  );
};

export const SupportedNetworks: FC = () => {
  const chains = [
    'astar',
    'avalanche',
    'chainide',
    'ethereum',
    'icp',
    'near',
    'polygon',
    'solana',
    'thegraph',
    'xrpl',
    'base',
  ];
  const links = [
    'https://astar.network/',
    'https://www.avax.network/',
    'https://chainide.com/',
    'https://ethereum.org/',
    'https://internetcomputer.org/',
    'https://near.org/',
    'https://polygon.technology/',
    'https://solana.com/',
    'https://thegraph.com/',
    'https://xrpl.org/',
    'https://www.base.org/',
  ];
  return (
    <div id="supported networks" className="bg-brand-white">
      <div id="container" className="relative flex overflow-x-hidden">
        <div
          className="relative flex min-w-[1201px] animate-marquee items-center
          space-x-4 whitespace-nowrap p-2 laptop:space-x-8 laptop:p-4"
        >
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
        <div
          className="absolute top-0 flex min-w-[1201px] animate-marquee2 items-center
          space-x-4 whitespace-nowrap p-2 laptop:space-x-8 laptop:p-4"
        >
          {chains.map((chain, index) => (
            <Chain key={`${chain} logo`} chain={chain} url={links[index]} />
          ))}
        </div>
        <div
          className="absolute top-0 flex min-w-[1201px] animate-marquee3 items-center
          space-x-4 whitespace-nowrap p-2 laptop:space-x-8 laptop:p-4"
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
