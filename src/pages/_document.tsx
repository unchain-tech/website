import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

type NoncedDocument = DocumentInitialProps & { nonce: string };

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

const CustomDocument = (props: NoncedDocument) => {
  return (
    <Html prefix="og: https://ogp.me/ns#" nonce={props.nonce}>
      <Head nonce={props.nonce}>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="unchain.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UNCHAIN" />
        <meta
          property="og:image"
          content="https://www.unchain.tech/UNCHAIN_banner.png"
        />
        <meta
          property="og:description"
          content="Learn how to develop and contribute to the decentralized web, earning tokens based on your on-chain activity."
        />
        <meta
          name="description"
          content="UNCHAIN is a community of passionate builders in the blockchain space."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@zsh0x" />
        <meta property="csp-nonce" content={props.nonce} />
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <body nonce={props.nonce}>
        <Main />
        <NextScript nonce={props.nonce} />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<NoncedDocument> => {
  const initialProps = await Document.getInitialProps(ctx);
  const nonce = (ctx.req?.headers['x-csp-nonce'] as string) ?? '';

  return { ...initialProps, nonce: nonce };
};

export default CustomDocument;
