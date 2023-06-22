import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { generateNonce } from '@/utils/randomNonce';

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)', '/'],
};

const generateCspHeader = (nonce: string): string => {
  const csp = [
    `default-src 'strict-dynamic' 'nonce-${nonce}' 'self' https://*.shiftbase.xyz https://*.unchain.tech`,
    `script-src ${
      process.env.NODE_ENV === 'development'
        ? "'unsafe-eval' 'unsafe-inline'"
        : `'nonce-${nonce}'`
    } 'self' https://*.shiftbase.xyz https://*.unchain.tech https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com`,
    "style-src 'unsafe-inline' 'self' https://*.shiftbase.xyz https://*.unchain.tech",
    "img-src 'self' https://*.shiftbase.xyz https://*.unchain.tech https://www.googletagmanager.com https://www.google-analytics.com",
    "connect-src 'self' https://*.shiftbase.xyz https://*.unchain.tech https://www.google-analytics.com",
    "object-src 'self'",
    "base-uri 'self'",
  ].join('; ');
  return csp;
};

export const middleware = (req: NextRequest): NextResponse | void => {
  const newNonce = generateNonce();
  const newCsp = generateCspHeader(newNonce);

  const reqHeaders = new Headers(req.headers);

  reqHeaders.set('X-CSP-Nonce', newNonce);
  reqHeaders.set('Content-Security-Policy', newCsp);

  const res = NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });

  res.headers.set('Content-Security-Policy', newCsp);
  res.headers.set('Referrer-Policy', 'same-origin');
  res.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-CSP-Nonce', newNonce);
  res.headers.set('X-DNS-Prefetch-Control', 'on');
  res.headers.set('X-Frame-Options', 'sameorigin');
  res.headers.set('X-XSS-Protection', '1; mode=block');
  return res;
};
