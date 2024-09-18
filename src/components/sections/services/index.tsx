import Image from 'next/image';
import { FC } from 'react';

import { useI18n } from '@/hooks/useI18n';

export const Services: FC = () => {
  const { t } = useI18n();
  const Card = ({
    iconType,
    heading,
    description,
  }: {
    [key: string]: string;
  }) => {
    return (
      <div
        id="card"
        className="rounded-[36px] border-4 border-brand-pink bg-brand-onyx p-8 text-brand-white"
      >
        <Image
          src={`/flowerbutton${iconType}.png`}
          alt=""
          width={64}
          height={64}
          className="pb-4"
        />
        <h2 className="pb-4">{heading}</h2>
        <p className="font-thin">{description}</p>
      </div>
    );
  };
  return (
    <div id="what we offer" className="bg-brand-yellow text-brand-onyx">
      <div id="container" className="px-6 py-8 desktop:px-32 desktop:py-16">
        <div
          id="sectiontitle"
          className="flex flex-col desktop:flex-row desktop:space-x-6"
        >
          <h2 className="text-4xl desktop:text-6xl">learn.</h2>
          <h2 className="text-4xl desktop:text-6xl">collaborate.</h2>
          <h2 className="text-4xl desktop:text-6xl">prove.</h2>
        </div>

        <div
          id="sectionbody"
          className="grid grid-flow-row gap-4 py-16 desktop:grid-flow-col desktop:gap-16"
        >
          <Card
            iconType="1"
            heading={t('VALUES.1.HEADING')}
            description={t('VALUES.1.DESCRIPTION')}
          />
          <Card
            iconType="2"
            heading={t('VALUES.2.HEADING')}
            description={t('VALUES.2.DESCRIPTION')}
          />
          <Card
            iconType="3"
            heading={t('VALUES.3.HEADING')}
            description={t('VALUES.3.DESCRIPTION')}
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
