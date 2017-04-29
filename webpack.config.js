var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/math-operations'
  ],
  output: {
      filename: '/dist/dev/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
};
