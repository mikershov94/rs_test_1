let isProduction = (process.env.NODE_ENV == 'production');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path      = require('path');
const webpack   = require('webpack');

module.exports = {
    

    entry: {
        app: [
            './src/index.tsx'
        ]
    },
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },

    devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: './public',
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { esModule: false }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ]
            },

            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: { generatorOpts: { compact: false } },
                exclude: '/node-modules/'
            },

            {
                test: /\.(png|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[path][name].[ext]' }
                    },
                    {
                        loader: 'img-loader'
                    },
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: '[path][name].[ext]' }
                    }
                ]
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node-modules/'
            }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: './css/main.css' }),
        new HtmlWebpackPlugin({
            hash: false,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}