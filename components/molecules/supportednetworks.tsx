import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';

import { useWindowDimensions } from 'hooks/useWindowDimensions';

const Chain: FC<{ chain: string; url: string }> = ({ chain, url }) => {
  const { width } = useWindowDimensions();
  return (
    <Link href={url}>
      <Image
        src={`/chain/${chain}.png`}
        alt={`${chain} logo`}
        width={width! > 481 ? 320 : 140}
        height={140}
      />
    </Link>
  );
};

export const SupportedNetworks = () => {
  return (
    <div id="supported networks" className="bg-brand-white">
      <div id="container" className="flex flex-col py-4">
        {/* <Chain chain="astar" url="https://astar.network" /> */}
      </div>
    </div>
  );
};

export default SupportedNetworks;
