import Image from 'next/image';
import Link from 'next/link';

import UNCHAIN_icon from 'public/UNCHAIN_icon.png';

export const Joinus = () => {
  return (
    <div id="Join us" className="relative bg-brand-onyx text-brand-white">
      <div id="container" className="px-6 py-16">
        <div id="word_join_the" className="flex flex-col laptop:space-x-64">
          <h1 className="font-light text-8xl desktop:text-[192px] z-10">
            join
          </h1>
          <h1 className="font-light text-8xl desktop:text-[192px] z-10">the</h1>
        </div>
        <div id="word_community" className="flex flex-col laptop:flex-row">
          <h1 className="font-light text-8xl desktop:text-[192px] z-10">
            comm
          </h1>
          <h1 className="font-light text-8xl desktop:text-[192px] z-10">
            unity
          </h1>
        </div>

        <Image
          src={UNCHAIN_icon}
          alt="UNCHAIN logo"
          className="absolute top-0 right-0 block tablet:hidden"
          width={160}
          height={500}
        />
        <Image
          src={UNCHAIN_icon}
          alt="UNCHAIN logo"
          className="absolute top-0 -right-48 h-full object-contain hidden tablet:block"
        />

        <Link
          href="https://airtable.com/shrKEXFRup9ZqF3GY"
          passHref={true}
          target="_blank"
          className="flex justify-center hover:no-underline"
        >
          <button className="btn bg-brand-red hover:bg-brand-blue mt-16 desktop:mt-32 px-16 py-4 text-2xl">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Joinus;
