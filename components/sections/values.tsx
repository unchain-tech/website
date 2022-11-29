import Link from 'next/link';

import { FC } from 'react';

export const Values: FC = () => {
  return (
    <div id="our values">
      <div
        id="container"
        className="px-6 desktop:px-32 pt-8 pb-16 desktop:py-24"
      >
        <h2 className="text-brand-yellow">our value</h2>
        <hr className="my-4 h-px border-0 bg-brand-pink" />

        <div id="body" className="space-y-4">
          <div id="heading">
            <h1 className="font-light text-7xl desktop:text-[144px] desktop:text-right">
              giver
            </h1>
            <h1 className="font-light text-7xl desktop:text-[144px] desktop:text-right">
              first
            </h1>
          </div>

          <p className="text-sm leading-relaxed desktop:text-2xl w-3/4 desktop:w-1/3">
            自身の ”与えられるもの”
            を理解して、戦略的にGIVEできる人を応援するコミュニティです。ナレッジを、時間を、つながりをGIVEする文化を育むための仕組みは、コミュニティメンバーと共に日々アップデートされていきます。
          </p>

          <Link
            href="https://unchain-shiftbase.notion.site/web3-UNCHAIN-964d92e24cd045bcbdd8848203985ba7"
            passHref={true}
            target="_blank"
          >
            <button className="btn bg-brand-red hover:bg-brand-blue mt-4 desktop:mt-8">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Values;
