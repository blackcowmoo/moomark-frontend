const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');
const Dotenv = require('dotenv-webpack');

const BASE_PATH = process.env.ROOT_PATH || '';

const moduleExports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  excludeFile: (str) => /\*\.test\.[jt]s(?x)$/.test(str),
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    if (process.env.NODE_ENV === 'development') config.plugins.push(new Dotenv());
    return config;
  },
  basePath: BASE_PATH,
  publicRuntimeConfig: {
    STAGE: process.env.STAGE || 'dev',
    GATEWAY_URL: process.env.GATEWAY_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
