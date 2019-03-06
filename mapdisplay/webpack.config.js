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
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }],
    },
};

module.exports = config;
