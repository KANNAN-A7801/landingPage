module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable module concatenation (scope hoisting) to fix Node.js v23
      // compatibility issue where Buffer.from(hex).toString('utf8') returns
      // empty string for some hex strings, causing broken module bindings.
      webpackConfig.optimization.concatenateModules = false;
      return webpackConfig;
    },
  },
};
