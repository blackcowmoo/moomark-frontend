const path = require('path');
const Dotenv = require('dotenv-webpack');

const BASE_PATH = process.env.NEXT_PUBLIC_ROOT_PATH || '';

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  excludeFile: (str) => /\*\.test\.[jt]s(?x)$/.test(str),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    if (process.env.NODE_ENV === 'development') config.plugins.push(new Dotenv());
    return config;
  },
  basePath: BASE_PATH,
};
