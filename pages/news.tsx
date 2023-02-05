import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { FC } from 'react';

import Layout from 'components/layouts/baseLayout';

export const News: FC = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  return (
    <Layout pageTitle="Latest News">
      <div id="container" className="mt-32 px-16 space-y-16">
        <h2 className="">NEWS</h2>
        <div
          id="newsgrid"
          className="laptop:grid laptop:grid-cols-3 laptop:gap-12 bigmonitor:gap-x-24"
        >
          {props.metadataList.map(
            (
              d: {
                meta: {
                  site: { canonical: string; name: string };
                  image: string;
                  title: string;
                  description: string;
                };
              },
              i: number,
            ) => {
              return (
                <a
                  key={`newsitem_${i + 1}`}
                  href={d.meta.site.canonical}
                  className="mb-8 pb-8 flex flex-col cursor-pointer items-center rounded-sm hover:outline outline-info hover:no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={d.meta.image}
                    width="640"
                    height="320"
                    alt="article thumbnail"
                  />
                  <div className="flex flex-col space-y-4 p-2">
                    <p className="text-lg font-medium laptop:text-2xl font-sans">
                      {d.meta.title.split('|')[0]}
                    </p>
                    <p className="text-base font-sans">
                      {d.meta.description.slice(0, 75)}...
                    </p>
                  </div>
                </a>
              );
            },
          )}
        </div>
      </div>
    </Layout>
  );
};

export default News;

export const getStaticProps: GetStaticProps = async () => {
  const newsURLs = [
    'https://www.neweconomy.jp/posts/291925',
    'https://prtimes.jp/main/html/rd/p/000000006.000095801.html',
    'https://www.neweconomy.jp/features/neco/256949',
    'https://www.neweconomy.jp/posts/207160',
  ];

  const metadataList = await Promise.all(
    newsURLs.map(async (x) => {
      const json: {
        meta: {
          site: {
            name: string;
            twitter?: string;
            favicon: string;
            logo?: string;
            canonical: string;
            manifest?: string;
          };
          keywords?: string[];
          author?: string;
          description: string;
          type?: string;
          image: string;
          title: string;
          locale?: string;
        };
        result: string;
      } = await fetch(`https://api.urlmeta.org/?url=${encodeURI(x)}`, {
        headers: {
          Authorization: Buffer.from(
            `dafav79942@cosaxu.com:${process.env.LINKPREVIEW_API_KEY}`,
          ).toString('base64'),
        },
      }).then((res) => res.json());

      return json;
    }),
  );

  return {
    props: { metadataList },
  };
};
