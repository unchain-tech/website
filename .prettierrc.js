module.exports = {
  arrowParens: 'always',
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: ['^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  tailwindConfig: './tailwind.config.js',
  overrides: [
    {
      files: ['{pages,components,hooks,}/**/*.{tsx,jsx,js,ts}'],
      options: {
        importOrder: [
          //なぜこの順番が要求されるのかはわからない
          'hamburger-react',
          'next',
          'react',
          '<THIRD_PARTY_MODULES>',
        ],
      },
    },
  ],
};
