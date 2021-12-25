const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    if (process.env.NODE_ENV === 'development') config.plugins.push(new Dotenv());
    return config;
  },
};
