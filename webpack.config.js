const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: [
      {
        context: ['/api', '/auth', '/health', '/check'],
        target: 'http://localhost:8001'
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};