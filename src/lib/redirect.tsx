import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { languageDetector } from './languageDetector';

export const useRedirect = (to?: string) => {
  const router = useRouter();
  const redirectPath = to || router.asPath;

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (redirectPath.startsWith(`/${detectedLng}`) && router.route === '/404') {
      // prevent endless loop
      router.replace(`/${detectedLng}${router.route}`);
      return;
    }

    if (detectedLng && languageDetector.cache) {
      languageDetector.cache(detectedLng);
    }
    router.replace(`/${detectedLng}${redirectPath}`);
  });

  return <></>;
};
