var path = require('path');

var APP_PATH        = path.join(__dirname),
    DIST_PATH       = path.join(APP_PATH, '/dist/'),
    FRONTEND_PATH   = path.join(APP_PATH, '/src/frontend/');

module.exports = {
    entry: {
        main: [
            path.join(FRONTEND_PATH, 'scripts/main.js')
        ]
    },
    output: {
        path: DIST_PATH,
        publicPath: 'dist/',
        filename: '[name].js'
    },
    resolve: {
        // Lets you import by specifying path from app root 
        // (defined here), in a addition to relative path.
        root: FRONTEND_PATH,
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};
