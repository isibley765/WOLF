var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var path = require('path');

var APP_DIR = `${__dirname}/display`;
var BUILD_DIR = path.resolve(__dirname, `${APP_DIR}/src/build_finals/`);

var config = {
    entry: {
        build1: `${APP_DIR}/src/main.jsx`,
    },
    output: {
        path: BUILD_DIR,
        filename: '.[name].js',
    },
    plugins: [
        new ExtractTextPlugin(`${BUILD_DIR}.styles.css`),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: APP_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react'],
            },
        }, {
            test: /\.css$/,
            loader: combineLoaders([{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            }]),
        }],
    },
};

module.exports = config;
