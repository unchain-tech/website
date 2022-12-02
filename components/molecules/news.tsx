import Link from 'next/link';

import { FC } from 'react';

export const News = () => {
  const NewsItem: FC<{ url: string; description: string }> = ({
    url,
    description,
  }) => {
    return (
      <Link
        href={url}
        passHref={true}
        className="hover:no-underline hover:text-brand-sky"
        target="_blank"
      >
        <div className="hover:border border-brand-sky rounded-lg p-1">
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

  const newslinks = [
    'https://unchain-shiftbase.notion.site/UNCHAIN-Build2Earn-on-Astar-Network-5b25608cccd549dea4609ee9cb87b52a',
    'https://unchain-shiftbase.notion.site/UNCHAIN-Bug-Bounty-Bootcamp-BBB-Cohort1-52247e1e2f904f89a5022dd24aef9c73',
  ];
  const newsdescriptions = [
    //"dApps開発を学ぶと、$ASTRがもらえる！UNCHAIN developer's grant 開始のお知らせ",
    '#Build2Earn on Astar Network - dAppを開発して1000$ASTRを獲得しよう！',
    'BBB（Bug Bounty Bootcamp） - スマートコントラクトのセキュリティ技術を学び、バグを見つけて賞金獲得しよう！',
  ];

  return (
    <div id="news container" className="py-8">
      <h2 className="text-brand-yellow py-4">NEWS</h2>
      {newslinks.map((url, index) => (
        <NewsItem
          key={`news ${index + 1}`}
          url={url}
          description={newsdescriptions[index]}
        />
      ))}
    </div>
  );
};

export default News;
