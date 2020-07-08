const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    optimization: {
        minimize: false,
    },
    entry: {
        'index': path.resolve(__dirname, 'src', 'index.js'),
        'lessons': path.resolve(__dirname, 'src', 'lessons.js'),
        'register': path.resolve(__dirname, 'src', 'register.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'lessons.html',
            template: './src/lessons.html',
            chunks: ['lessons']
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './src/register.html',
            chunks: ['register']
        })
    ]
}
