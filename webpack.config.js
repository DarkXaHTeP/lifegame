var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = function (env) {
    const isProd = env === "prod";
    if (isProd) {
        process.env.NODE_ENV = "production";
    }

    console.log(`This build is in production mode: ${isProd}`);

    const config = {
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
                    exclude: ['node_modules']
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

    if (isProd) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        )
    }
    return config;
}
