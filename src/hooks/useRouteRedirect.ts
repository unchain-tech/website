import { useRouter } from 'next/router';

import { i18nConfig } from '../../i18n';

import { languageDetector } from '@/lib/languageDetector';

export const useRouteRedirect = () => {
  const router = useRouter();

  const redirect = (to: string, replace?: boolean) => {
    const detectedLng = i18nConfig.locales.includes(String(router.query.locale))
      ? String(router.query.locale)
      : languageDetector.detect();
    if (to.startsWith(`/${detectedLng}`) && router.route === '/404') {
      // prevent endless loop
      router.replace(`/${detectedLng}${router.route}`);
      return;
    }

    if (detectedLng && languageDetector.cache) {
      languageDetector.cache(detectedLng);
    }
    if (replace) {
      router.replace(`/${detectedLng}${to}`);
    } else {
      router.push(`/${detectedLng}${to}`);
    }
  };

  return { redirect };
};
