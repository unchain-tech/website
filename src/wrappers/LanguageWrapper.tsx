import { useRouter } from 'next/router';
import { type ReactNode, useEffect } from 'react';

import { i18nConfig } from '../../i18n';

import { languageDetector } from '@/lib/languageDetector';

interface LanguageWrapperProps {
  children: ReactNode;
}

export const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const router = useRouter();
  const detectedLng = languageDetector.detect();

  useEffect(() => {
    const {
      query: { locale },
      asPath,
      isReady,
    } = router;

    // Check if the current route has accurate locale
    if (isReady && !i18nConfig.locales.includes(String(locale))) {
      if (asPath.startsWith(`/${detectedLng}`) && router.route === '/404') {
        return;
      }

      if (detectedLng && languageDetector.cache) {
        languageDetector.cache(detectedLng);
      }
      router.replace(`/${detectedLng}${asPath}`);
    }
  }, [router, detectedLng]);

  return (router.query.locale &&
    i18nConfig.locales.includes(String(router.query.locale))) ||
    router.asPath.includes(detectedLng ?? i18nConfig.defaultLocale) ? (
    <>{children}</>
  ) : (
    <p>Loading...</p>
  );
};
