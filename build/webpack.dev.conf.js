var config = require('../config')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    // loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('chunks/chunk_[id].js')
  },
  // vue: {
  //   loaders: utils.cssLoaders({
  //     sourceMap: config.build.productionSourceMap,
  //     extract: true
  //   })
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    
    // new ExtractTextPlugin(utils.assetsPath('css/[name].css')),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // })
  ]
})
