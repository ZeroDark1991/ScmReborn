// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    // home: path.resolve(__dirname, '../server/public/home.html'),
    setting: path.resolve(__dirname, '../server/static/setting.html'),
    assetsRoot: path.resolve(__dirname, '../server/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {
      '/app': {
        target: 'http://dev.sayogi.cn/app',
        ignorePath: true,
        secure: false,
        changeOrigin: true,
        headers: {
          'userId' : '145017402946300201'
        }
      }
    }
  }
}
