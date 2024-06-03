import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import AkindoLogo from 'public/logo/akindo_logo.svg';
import CentrumLogo from 'public/logo/centrum_logo.svg';
import EthereumJPLogo from 'public/logo/ethereumjp_logo.png';
import KudasaiJPLogo from 'public/logo/kudasaijp_logo.svg';
import WaveeLogo from 'public/logo/wavee_logo.png';
import { FC } from 'react';

export const Supporters: FC = () => {
  const PartnerLogo = (props: {
    imgSource: StaticImport;
    supporterName: string;
  }) => (
    <div className="w-1/3 tablet:w-1/6 laptop:w-1/8 flex items-center justify-center p-2 laptop:p-4">
      <Image src={props.imgSource} alt={props.supporterName} />
    </div>
  );
  return (
    <div id="what we offer" className="bg-white text-brand-onyx">
      <div id="container" className="px-6 py-8 desktop:px-32 desktop:py-16">
        <h2 className="text-4xl desktop:text-6xl pb-8">Our supporters</h2>

        <div
          id="sectionbody"
          className="flex flex-wrap justify-center laptop:space-x-8"
        >
          <PartnerLogo imgSource={AkindoLogo} supporterName="Akindo" />
          <PartnerLogo imgSource={CentrumLogo} supporterName="Centrum" />
          <PartnerLogo
            imgSource={EthereumJPLogo}
            supporterName="Ethereum Japan"
          />
          <PartnerLogo imgSource={KudasaiJPLogo} supporterName="KudasaiJP" />
          <PartnerLogo imgSource={WaveeLogo} supporterName="WAVEE" />
        </div>
      </div>
    </div>
  );
};
export default Supporters;
