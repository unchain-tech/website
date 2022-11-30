import Image from 'next/image';

import { FC } from 'react';

import { useWindowDimensions } from 'hooks/useWindowDimensions';

export const Collaborators: FC = () => {
  const { width } = useWindowDimensions();

  const PartnerLogo = ({
    partner_name,
    logo_image,
    partner_website,
  }: {
    [key: string]: string;
  }) => {
    return (
      <a href={partner_website} target="_blank" rel="noreferrer">
        <div className="relative">
          <Image
            src={logo_image}
            className="hover:cursor-pointer mx-auto"
            width={width! > 481 ? 320 : 140}
            height={140}
            alt={`${partner_name} logo`}
          />
        </div>
      </a>
    );
  };

  return (
    <div id="collaborators">
      <div id="container" className="py-8 desktop:py-16 px-6">
        <h2 className="text-brand-yellow font-light text-center py-8">
          official supporters
        </h2>
        <div
          id="partners"
          className="items-center justify-evenly grid gap-4 grid-cols-2 tablet:grid-cols-3"
        >
          <PartnerLogo
            partner_name="ASTAR Network"
            logo_image="https://raw.githubusercontent.com/AstarNetwork/brand-assets/7ab80a37976bf1015be8c9e257af56d1c52f6bd1/Astar%20Identity/Astar_landscape.svg"
            partner_website="https://astar.network/"
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
            logo_image="https://raw.githubusercontent.com/near/docs/master/website/static/img/near_logo_white.svg"
            partner_website="https://near.org/"
          />
          <PartnerLogo
            partner_name="Polygon Technologies"
            logo_image="https://raw.githubusercontent.com/maticnetwork/matic-docs/6a2c7acfd44da03e34b7e34d25a419bb5841fbe9/static/img/polygon/polygon-logo-inverted.png"
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

export default Collaborators;
