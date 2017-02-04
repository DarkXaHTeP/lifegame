var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
                        loader: 'babel-loader'
                    }
                ],
                exclude:['node_modules']
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ]
}
