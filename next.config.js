/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 's3.*.amazonaws.com' },
      { protocol: 'https', hostname: 'prtimes.jp' },
    ],
  },
};

module.exports = nextConfig;
