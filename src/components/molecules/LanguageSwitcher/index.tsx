import Link from 'next/link';
import { useRouter } from 'next/router';

import { languageDetector } from '@/lib/languageDetector';

interface LanguageSwitcherProps {
  locale: string;
  href?: string;
  asPath?: string;
}

export const LanguageSwitcher = ({
  locale,
  ...rest
}: LanguageSwitcherProps) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  // biome-ignore lint/complexity/noForEach: readability
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, String(router.query[k]));
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      href={href}
      onClick={() =>
        languageDetector.cache ? languageDetector.cache(locale) : {}
      }
    >
      <button type="button">
        <p className="text-xl">{locale}</p>
      </button>
    </Link>
  );
};
