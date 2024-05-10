/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.st-note.com' },
      { protocol: 'https', hostname: 'prcdn.freetls.fastly.net' },
      { protocol: 'https', hostname: 'prtimes.jp' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 's3.*.amazonaws.com' },
    ],
  },
  env: {
    NEXT_PUBLIC_AIRTABLE_PAT: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
    NEXT_PUBLIC_AIRTABLE_BASE_INQUIRYFORM:
      process.env.NEXT_PUBLIC_AIRTABLE_BASE_INQUIRYFORM,
    NEXT_PUBLIC_AIRTABLE_TABLE_INQUIRYFORM:
      process.env.NEXT_PUBLIC_AIRTABLE_TABLE_INQUIRYFORM,
    NEXT_PUBLIC_JSONLINK_API_KEY: process.env.NEXT_PUBLIC_JSONLINK_API_KEY,
  },
};

module.exports = nextConfig;
