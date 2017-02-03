var path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './index',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.jsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)(\?.*$|$)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    }

}