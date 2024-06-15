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
        proxy:[ 
            { // proxy needed to make api calls to server while using hmr
                // https://webpack.js.org/configuration/dev-server/#devserverproxy
                context: ['/v1'],
                target: 'http://localhost:8000/' // A request in frontend to /v1/users will now proxy the request to http://localhost:8080/v1/users.
            }
        ]
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