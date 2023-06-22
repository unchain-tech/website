import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useWindowDimensions } from '@/hooks/useWindowDimensions';

export const Supporters: FC = () => {
  const { width } = useWindowDimensions();

  const PartnerLogo = ({
    partner_name,
    logo_image,
    partner_website,
  }: {
    [key: string]: string;
  }) => {
    return (
      <Link href={partner_website} target="_blank">
        <Image
          src={logo_image}
          className="mx-auto hover:cursor-pointer"
          width={width! > 481 ? 320 : 140}
          height={60}
          alt={`${partner_name} logo`}
        />
      </Link>
    );
  };

  return (
    <div id="collaborators">
      <div id="container" className="px-6 py-8 desktop:py-16">
        <h2 className="py-8 text-center text-4xl text-brand-yellow desktop:text-6xl">
          official supporters
        </h2>
        <div
          id="partners"
          className="grid grid-cols-2 items-center gap-4 py-8 tablet:grid-cols-3"
        >
          <PartnerLogo
            partner_name="ASTAR Network"
            logo_image="/partners/astar.png"
            partner_website="https://astar.network/"
          />
          <PartnerLogo
            partner_name="AWS Activate"
            logo_image="/partners/awsactivate.png"
            partner_website="https://aws.amazon.com/activate/"
          />
          <PartnerLogo
            partner_name="Fracton Ventures"
            logo_image="/partners/fracton.png"
            partner_website="https://fracton.ventures/"
          />
          <PartnerLogo
            partner_name="HashHub Inc"
            logo_image="/partners/hashhub.png"
            partner_website="https://hashhub.tokyo/"
          />
          <PartnerLogo
            partner_name="NEAR Japan"
            logo_image="/partners/nearjapan.png"
            partner_website="https://near.org/"
          />
          <PartnerLogo
            partner_name="Polygon Technologies"
            logo_image="/partners/polygon.png"
            partner_website="https://polygon.technology/"
          />
          <PartnerLogo
            partner_name="Polygon Studio"
            logo_image="/partners/polygonstudio.png"
            partner_website="https://polygonstudios.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Supporters;