
var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'tests/spec'),
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel',
            },
        ],
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-js-number': 'src/index.js',
        },
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'src',
            'node_modules',
        ],
    },
};
