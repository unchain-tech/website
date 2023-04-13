import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { FC } from 'react';

import Layout from 'components/layouts/baseLayout';

type NewsMetadata = {
  title: string;
  description: string;
  images: string[];
  duration: number;
  domain: string;
  url: string;
};

export const News: FC = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const separators = ['。', '｜'];
  return (
    <Layout pageTitle="Latest News">
      <div id="container" className="mt-32 px-16 space-y-16">
        <h2 className="">NEWS</h2>
        <div
          id="newsgrid"
          className="laptop:grid laptop:grid-cols-3 laptop:gap-12 bigmonitor:gap-x-24"
        >
          {props.metadataList.map((d: NewsMetadata, i: number) => {
            return (
              <a
                key={`newsitem_${i + 1}`}
                href={d.url}
                className="mb-8 pb-8 flex flex-col cursor-pointer items-center rounded-sm hover:outline outline-info hover:no-underline"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={d.images[0]}
                  width="640"
                  height="320"
                  alt="article thumbnail"
                />
                <div className="flex flex-col space-y-4 p-2">
                  <p className="text-lg font-medium laptop:text-2xl font-sans">
                    {
                      d.title.split(
                        new RegExp('[' + separators.join('') + ']', 'g'),
                      )[0]
                    }
                  </p>
                  <p className="text-base font-sans">
                    {d.description.slice(0, 75)}...
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default News;

export const getStaticProps: GetStaticProps = async () => {
  const newsURLs = [
    'https://prtimes.jp/main/html/rd/p/000000008.000095801.html',
    'https://www.neweconomy.jp/posts/291925',
    'https://prtimes.jp/main/html/rd/p/000000006.000095801.html',
    'https://www.neweconomy.jp/features/neco/256949',
    'https://www.neweconomy.jp/posts/207160',
  ];

  const metadataList = await Promise.all(
    newsURLs.map(async (x) => {
      const json: NewsMetadata = await fetch(
        `https://jsonlink.io/api/extract?url=${encodeURI(x)}`,
      ).then((res) => res.json());

      return json;
    }),
  );

  return {
    props: { metadataList },
  };
};
