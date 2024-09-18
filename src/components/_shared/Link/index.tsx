import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  skipLocaleHandling?: boolean;
  locale?: string;
  href: string;
  target?: string;
}

export const Link = ({
  children,
  skipLocaleHandling,
  target,
  ...rest
}: LinkProps) => {
  const router = useRouter();
  const locale = rest.locale || (router.query.locale as string) || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <NextLink href={href} target={target}>
      {children}
    </NextLink>
  );
};
