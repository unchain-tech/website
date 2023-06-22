module.exports = {
  arrowParens: 'always',
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  semi: true,
  importOrder: ['^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  tailwindConfig: './tailwind.config.js',
  plugins: ['prettier-plugin-tailwindcss'],
};
