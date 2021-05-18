const path      = require('path');
const webpack   = require('webpack');

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/'
    }
}