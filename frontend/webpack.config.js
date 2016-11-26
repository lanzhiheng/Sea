let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },



  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
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
