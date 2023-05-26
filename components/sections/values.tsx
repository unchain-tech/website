import Link from 'next/link';

import { FC } from 'react';

export const Values: FC = () => {
  return (
    <div id="our values">
      <div
        id="container"
        className="px-6 pb-16 pt-8 desktop:px-32 desktop:py-24"
      >
        <h2 className="text-brand-yellow">our value</h2>
        <hr className="my-4 h-px border-0 bg-brand-pink" />

        <div id="body" className="space-y-4">
          <div id="heading">
            <h2 className="text-7xl font-light desktop:text-right desktop:text-[144px]">
              giver
            </h2>
            <h2 className="text-7xl font-light desktop:text-right desktop:text-[144px]">
              first
            </h2>
          </div>

          <p className="w-4/5 text-xs leading-relaxed desktop:w-1/3 desktop:text-lg">
            自身の ”与えられるもの”
            を理解して、戦略的にGIVEできる人を応援するコミュニティです。ナレッジを、時間を、つながりをGIVEする文化を育むための仕組みは、コミュニティメンバーと共に日々アップデートされていきます。
          </p>

          <Link
            href="https://unchain-shiftbase.notion.site/UNCHAIN-Core-Values-625cf677042145ce883889d479a45cf4"
            passHref={true}
            target="_blank"
          >
            <button className="btn mt-4 bg-brand-red hover:bg-brand-blue desktop:mt-8">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Values;
