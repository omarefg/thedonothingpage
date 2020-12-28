const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|jpeg|webp|ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[hash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
    new FaviconsWebpackPlugin(resolve(__dirname, 'public/favicon.svg')),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/dist.*'],
    }),
  ],
};
