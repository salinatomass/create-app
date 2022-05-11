const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg|jpeg|svg)/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
