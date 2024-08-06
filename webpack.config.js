const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
    entry: {
        listeningFront: './src/listening-front.js',
        listeningBack: './src/listening-back.js',
        writingFront: './src/writing-front.js',
        writingBack: './src/writing-back.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/cards/listening-front.html',
            filename: 'listening-front.html',
            inject: 'body',
            chunks: ['listeningFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/cards/listening-back.html',
            filename: 'listening-back.html',
            inject: 'body',
            chunks: ['listeningBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/cards/writing-back.html',
            filename: 'writing-back.html',
            inject: 'body',
            chunks: ['writingBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/cards/writing-front.html',
            filename: 'writing-front.html',
            inject: 'body',
            chunks: ['writingFront'],
        }),

        new HtmlInlineScriptPlugin(),
    ],
    optimization: {
        minimize: false,
        splitChunks: false, // Prevents code splitting for inlining
        removeEmptyChunks: false,
    },
};
