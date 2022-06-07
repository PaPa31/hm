// plugins/webpackProxy/index.js
module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: {'devServer.proxy': 'replace'},
        devServer: {
          allowedHosts: ['www.orenburg.ru'],
          proxy: {
            '/hm/myComponents': {
              target: 'http://localhost:3000',
              router: () => 'http://localhost:4000',
              secure: false,
              changeOrigin: true,
              logLevel: 'debug',
            },
          },
        },
      };
    },
  };
};
