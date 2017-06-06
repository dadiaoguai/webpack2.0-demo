const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env) {
 return {
   entry: {
     main: './src/index.js',
   },
   output: {
     filename: '[name].js', // name 与 entry 中的属性一一对应
     path: path.resolve(__dirname,'dist')
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
           use: 'css-loader'
         })
       }
     ]
   },
   plugins: [
     new ExtractTextPlugin('styles.css'),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor',
       minChunks: function (module) { // 提取所有的公共vendor
         return module.context && module.context.indexOf('node_modules') !== 1
       }
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'manifest' // 放置 common runtime code
     })
   ]
 }
}