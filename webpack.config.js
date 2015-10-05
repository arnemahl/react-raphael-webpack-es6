'use strict';

var webpack = require('webpack'),
    path    = require('path');

var APP_PATH        = path.join(__dirname),
    DIST_PATH       = path.join(APP_PATH, '/dist'),
    FRONTEND_PATH   = path.join(APP_PATH, '/src/frontend');

module.exports = {
    cache: true,

    entry: {
        main: [
            path.join(FRONTEND_PATH, '/main.js')
        ]
    },
    output: {
        path 		: DIST_PATH,
        publicPath  : '/dist/',
        filename    : '[name].js'
    },
    resolve: {
        root: FRONTEND_PATH,
        extensions: ['', '.jsx', '.js']
    },
    module: {
        // loaders: [
        //     { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ },
        //     { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        // ]
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot',
                    'babel?optional[]=es7.classProperties&optional[]=es7.objectRestSpread',
                    'eslint'
                ].join('!')
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    externals: {
        react: 'React'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        host    : 'localhost',
        port    : '1234',
        quiet   : false,
        noInfo  : false,
        proxy: {
            '*': 'http://localhost:3001/'
        },
        stats: {
            chunks      : false,
            chunkModules: false,
            timings     : true
        }
    }
};

