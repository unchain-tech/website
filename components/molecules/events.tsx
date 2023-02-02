import Link from 'next/link';

import { FC } from 'react';

export const Events = () => {
  const EventItem: FC<{ id: string; url: string; description: string }> = ({
    id,
    url,
    description,
  }) => {
    return (
      <Link
        id={id}
        href={url}
        passHref={true}
        className="hover:no-underline hover:text-brand-sky"
        target="_blank"
      >
        <div className="hover:outline outline-1 outline-brand-sky rounded-lg p-1">
          <div className="flex py-2 justify-between">
            <p className="font-sans truncate pr-6">{description}</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 laptop:w-8 laptop:h-8 stroke-brand-yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <hr className="h-px border-0 bg-brand-pink" />
        </div>
      </Link>
    );
  };

  const ids = ['news_shinchoku', 'news_grant', 'news_astar', 'news_bug_bounty'];
  const officiallinks = [
    'https://unchain-shiftbase.notion.site/web3-34bb72d36ded49229bf2cc07aab34da5',
    'https://unchain-shiftbase.notion.site/UNCHAIN-Build2Earn-on-Astar-Network-5b25608cccd549dea4609ee9cb87b52a',
    'https://unchain-shiftbase.notion.site/UNCHAIN-Bug-Bounty-9ab7e3b89ae54791a048924bf9efac84',
  ];
  const officiallink_blurbs = [
    "UNCHAIN developer's grant - 進捗に応じて、最大 2,000,000 $JPYC の開発資金を獲得しよう！",
    '#Build2Earn on Astar Network - dAppを開発して 1000 $ASTR を獲得しよう！',
    'Bug Bounty Program - スマートコントラクトのセキュリティ技術を学び、バグを見つけて賞金獲得しよう！',
  ];

  return (
    <div id="official links container" className="py-8">
      <h2 className="text-brand-yellow py-4">EVENTS</h2>
      {officiallink_blurbs.map((blurb, index) => (
        <EventItem
          key={`Event ${index + 1}`}
          id={ids[index]}
          url={officiallinks[index]}
          description={blurb}
        />
      ))}
    </div>
  );
};

export default Events;
