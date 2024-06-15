const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [ './src/client/index.js'], // entry point into app
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        host: '0.0.0.0', // required for docker to work with dev server
        port: 3001,
        hot: true, // hmr for dev server
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/' // match to output prop for publicPath
        },
        headers: {
            'Access-Control=Allow-Origin': '*'
        },
        proxy: [
            { // request to /api/endpoint on frontend will reroute to localhost:8001/endpoint (server port)
              context: ['/api'],
              target: 'http://localhost:8001',
              pathRewrite: { '^/api': '' },
            },
          ],
    },

    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },        
          },
          {
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],        
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            exclude: /node_modules/,
            type: 'asset/resource',
        },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, './src/client/assets/images/favicon.ico'),
            template: './index.html'
        })
    ]
};