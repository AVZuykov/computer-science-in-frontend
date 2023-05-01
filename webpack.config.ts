// Generated using webpack-cli https://github.com/webpack/webpack-cli

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

import 'webpack-dev-server'

import { pages } from './pages'

const stylesHandler = MiniCssExtractPlugin.loader

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',

  entry: pages.reduce(
    (config: Record<string, string>, page) => {
      config[page] = `./src/${page}/index.ts`
      return config
    },
    { index: './src/index.ts' }
  ),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]/[name].js',
  },

  devServer: {
    host: 'localhost',
    port: 4000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `src/index.html`,
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `src/${page}/index.html`,
          filename: `${page}/index.html`,
          chunks: [page],
        })
    )

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ),

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './pages'),
      '@': path.resolve(__dirname, './src/'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

export default config
