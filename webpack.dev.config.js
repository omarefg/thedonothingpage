const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { ESBuildPlugin } = require('esbuild-loader');

const host = 'localhost';
const port = 8080;

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: `http://${host}:${port}/`,
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'esbuild-loader',
        exclude: '/node_modules/',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                    @import "${resolve(__dirname, 'src/styles/index.scss')}";
                `,
            },
          },
        ],
        include: /\.module\.(s*)css$/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                    @import "${resolve(__dirname, 'src/styles/index.scss')}";
                `,
            },
          },
        ],
        exclude: /\.module\.(s*)css$/,
      },
      {
        test: /\.jpg|png|gif|woff|woff2|eot|ttf|svg|mp4|webm|webp$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new FaviconsWebpackPlugin(resolve(__dirname, 'public/favicon.svg')),
    new ESBuildPlugin(),
  ],
  mode: 'development',
};
