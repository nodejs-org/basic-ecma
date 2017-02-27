var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/math-operations'
  ],
  output: {
      filename: '/dist/dev/bundle.js'
  },
  devtool: 'source-map',
  // module: {
  //   rules: [
  //     { use: 'babel-loader'}
  //   ]
  // }
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
