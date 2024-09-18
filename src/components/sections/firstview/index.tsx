import Link from 'next/link';
import { FC } from 'react';

import SupportedNetworks from './supportednetworks';

import { useI18n } from '@/hooks/useI18n';

export const FirstView: FC = () => {
  const { t } = useI18n();
  return (
    <div
      id="firstview"
      className="flex flex-col justify-end space-y-12 supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]" // works with mobile viewports too
    >
      <div id="section container" className="px-6 desktop:px-32">
        <div id="slogan" className="pb-4 pt-8">
          <h1 className="text-brand-yellow">
            UNCHAIN
            <div className="text-white">your</div>
            <div className="text-white">potential.</div>
          </h1>
        </div>

        <p
          id="blurb"
          className="w-5/6 py-2 text-base laptop:w-1/2 desktop:py-4 desktop:text-lg"
        >
          {t('TOP.INTRO')}
        </p>

        <Link id="start_building" href="https://buidl.unchain.tech/" passHref>
          <button className="btn my-2 bg-brand-red px-12 hover:bg-brand-blue desktop:my-4">
            Start Building
          </button>
        </Link>
      </div>
      <SupportedNetworks />
    </div>
  );
};

export default FirstView;
