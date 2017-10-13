const path = require('path');

module.exports = {
    entry: {
        main: './main.js',        
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: '.'
    }
};