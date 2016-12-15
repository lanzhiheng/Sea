let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool


  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2', 'stage-1'],
          compact: false
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: '/dist/',
    compress: true,
    port: 9000
  }

}
