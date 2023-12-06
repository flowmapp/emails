require('dotenv').config()
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const html = fs
  .readFileSync('./src/index.html', 'utf-8')
  .replace('<div id="root"></div>', '{{content}}')

const emails = fs.readdirSync('./src/emails')

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002,
    hot: true,
    historyApiFallback: { index: '/', disableDotRule: true },
  },
  entry: {
    index: './src/index.jsx',
  },
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
      {
        test: /\.png|jpe?g$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.EnvironmentPlugin({
      html,
      emails: JSON.stringify(emails),
      STATIC_BASE_URL: process.env.STATIC_BASE_URL,
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@const': path.resolve(__dirname, 'src/const'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@static': path.resolve(__dirname, 'static/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.js', '.jsx'],
  },
}
