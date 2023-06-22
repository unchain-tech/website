import Image from 'next/image';
import shiftbase_logo from 'public/sb_logoname.png';

export const Company = () => {
  return (
    <div id="company" className="space-y-2">
      <Image
        src={shiftbase_logo}
        alt="shiftbase logo"
        width={240}
        height={80}
      />
      <h2 id="company" className="font-sans font-medium">
        株式会社shiftbase
      </h2>
      <p id="address" className="font-sans text-lg">
        〒160-0011 新宿区若葉1-7-15
      </p>
    </div>
  );
};
