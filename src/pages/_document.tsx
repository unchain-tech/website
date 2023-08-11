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
