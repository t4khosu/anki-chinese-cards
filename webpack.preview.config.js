const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    mode: 'development',
    entry: {
        toChinesePreview: './src/preview/preview.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist-preview'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Chinese Preview',
            filename: 'to-chinese-preview.html',
            inject: 'body',
            chunks: ['toChinesePreview'],
        }),
        new webpack.DefinePlugin({
            PACKAGE_VERSION: JSON.stringify(packageJson.version),
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html'],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist-preview'),
        },
        hot: true,
        port: 8080,
        open: ['/to-chinese-preview.html'],
    },
};
