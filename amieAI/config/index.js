'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	// add Bito 180209 --------------------------------------------------------------------
    	'/api' : {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {  // �J���T�[�o�[�ł�Django��API�ɃA�N�Z�X�ł���悤�ɐݒ�
          '^/api': 'api'
        }
      }
      // --------------------------------------------------------------------------------------
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    //cssSourceMap: true, // del Bito 180209
    cssSourceMap: false, // add Bito 180209
  },

  build: {
    // Template for index.html
    //index: path.resolve(__dirname, '../dist/index.html'),		// del Bito 180209
    index: path.resolve(__dirname, '../templates/index.html'),	 // add Bito 180209

    // Paths
    //assetsRoot: path.resolve(__dirname, '../dist'),	// del Bito 180209
    //assetsSubDirectory: 'static',						// del Bito 180209
    //assetsPublicPath: '/',							// del Bito 180209
    
    assetsRoot: path.resolve(__dirname, '../static'),
    assetsSubDirectory: 'build',
    assetsPublicPath: '/static/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
