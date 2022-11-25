const path = require('path');

const buildLintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildLintCommand],
  '**/*': ['yarn prettier'],
};
