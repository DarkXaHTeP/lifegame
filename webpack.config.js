const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
                    test: /\.(jsx|js)$/,
                    use: 'babel-loader',
                    exclude: ['node_modules']
                },

                {
                    test: /\.html$/,
                    use: 'html-loader'
                },

                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        use: {
                            loader: 'css-loader',
                            options: {
                                minimize: isProd
                            }
                        }
                    })
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html"
            }),

            new ExtractTextWebpackPlugin({
                filename: "bundle.css"
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
