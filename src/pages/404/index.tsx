import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { isDynamicRoute } from 'next/dist/shared/lib/router/utils/is-dynamic';
import { parseRelativeUrl } from 'next/dist/shared/lib/router/utils/parse-relative-url';
import { removeTrailingSlash } from 'next/dist/shared/lib/router/utils/remove-trailing-slash';
import { getRouteRegex } from 'next/dist/shared/lib/router/utils/route-regex';
import { type NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useRouteRedirect } from '@/hooks/useRouteRedirect';

async function getPageList() {
  if (process.env.NODE_ENV === 'production') {
    const { sortedPages } = await getClientBuildManifest();
    return sortedPages;
  }
  if (typeof window !== 'undefined' && window.__BUILD_MANIFEST?.sortedPages) {
    console.log(window.__BUILD_MANIFEST.sortedPages);
    return window.__BUILD_MANIFEST.sortedPages;
  }
  return [];
}

async function getDoesLocationMatchPage(location: string) {
  const pages = await getPageList();

  const parsed = parseRelativeUrl(location);
  const { pathname } = parsed;
  return pathMatchesPage(pathname, pages);
}

function pathMatchesPage(pathname: string, pages: string[]) {
  const cleanPathname = removeTrailingSlash(pathname);

  if (pages.includes(cleanPathname)) {
    return true;
  }

  const page = pages.find(
    (page) => isDynamicRoute(page) && getRouteRegex(page).re.test(cleanPathname)
  );

  if (page) {
    return true;
  }
  return false;
}

/**
 * If both asPath and pathname are equal then it means that we
 * are on the correct route it still doesnt exist
 */
function doesNeedsProcessing(router: NextRouter) {
  const status = router.pathname !== router.asPath;
  console.log('Does Needs Processing', router.asPath, status);
  return status;
}

const Custom404 = () => {
  const router = useRouter();
  const { redirect } = useRouteRedirect();

  const [isNotFound, setIsNotFound] = useState(false);

  const processLocationAndRedirect = async (router: NextRouter) => {
    if (doesNeedsProcessing(router)) {
      const targetIsValidPage = await getDoesLocationMatchPage(router.asPath);
      if (targetIsValidPage) {
        await router.replace(router.asPath);
        return;
      }
    }
    setIsNotFound(true);
  };

  useEffect(() => {
    if (router.isReady) {
      processLocationAndRedirect(router);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  if (!isNotFound) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col gap-10">
        <h1>404 - Page Not Found</h1>

        <button type="button" onClick={() => redirect('/')}>
          <p className="hover:underline">Go to Home Page</p>
        </button>
      </div>
    </div>
  );
};

export default Custom404;
