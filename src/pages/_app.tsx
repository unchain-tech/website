import I18nProvider from 'next-translate/I18nProvider';
import type { AppProps } from 'next/app';
import 'public/styles/globals.css';

import { i18nConfig } from '../../i18n';
import commonEN from '../../locales/en/common.json';
import commonJA from '../../locales/ja/common.json';

import { LanguageWrapper } from '@/wrappers/LanguageWrapper';

const App = ({ Component, pageProps, router }: AppProps) => {
  const lang = i18nConfig.locales.includes(router.query.locale as string)
    ? String(router.query.locale)
    : i18nConfig.defaultLocale;

  return (
    <I18nProvider
      lang={lang}
      // @ts-expect-error bug in next-translate
      namespaces={{ common: lang === 'ja' ? commonJA : commonEN }}
    >
      <LanguageWrapper>
        <Component {...pageProps} />
      </LanguageWrapper>
    </I18nProvider>
  );
};

export default App;
