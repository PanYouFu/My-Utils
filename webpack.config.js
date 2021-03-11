/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin


module.exports = {
  entry: './site/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'site/build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'site/build'),
    compress: true,
    port: 9000,
    quiet: true,
    overlay: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg', '.png'],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssets({})],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'utils app',
      filename: 'index.html',
      template: './site/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      }, {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      }, {
        test: /\.(le|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'less-loader',
        ], // 将 Less 编译为 CSS
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[ext]',
            outputPath: 'static',
          },
        },
      }, {
        test: /\.md$/,
        use: {
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
      },
    ],
  },
}
