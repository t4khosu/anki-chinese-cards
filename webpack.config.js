const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        'vocabulary/listeningFront': './src/node-types/vocabulary/listening-front.ts',
        'vocabulary/listeningBack': './src/node-types/vocabulary/listening-back.ts',
        'vocabulary/writingFront': './src/node-types/vocabulary/writing-front.ts',
        'vocabulary/writingBack': './src/node-types/vocabulary/writing-back.ts',
        'compare/compareFront': './src/node-types/compare/compare-front.ts',
        'compare/compareBack': './src/node-types/compare/compare-back.ts',
        'vocabulary/styles': './src/style/vocabulary-card-styles.scss',
        'compare/styles': './src/style/compare-card-styles.scss',
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
                    MiniCssExtractPlugin.loader, // Extracts CSS into a separate file
                    'css-loader', // Translates CSS into CommonJS
                    'sass-loader', // Compiles Sass to CSS
                ],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/listening-front.html',
            filename: 'vocabulary/listening-front.html',
            inject: 'body',
            chunks: ['vocabulary/listeningFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/listening-back.html',
            filename: 'vocabulary/listening-back.html',
            inject: 'body',
            chunks: ['vocabulary/listeningBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/writing-back.html',
            filename: 'vocabulary/writing-back.html',
            inject: 'body',
            chunks: ['vocabulary/writingBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/writing-front.html',
            filename: 'vocabulary/writing-front.html',
            inject: 'body',
            chunks: ['vocabulary/writingFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/compare.html',
            filename: 'compare/compare-front.html',
            inject: 'body',
            chunks: ['compare/compareFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/compare.html',
            filename: 'compare/compare-back.html',
            inject: 'body',
            chunks: ['compare/compareBack'],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),

        new HtmlInlineScriptPlugin(),

        new webpack.DefinePlugin({
            PACKAGE_VERSION: JSON.stringify(packageJson.version),
        }),
    ],
    optimization: {
        minimize: false,
        splitChunks: false, // Prevents code splitting for inlining
        removeEmptyChunks: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

};
