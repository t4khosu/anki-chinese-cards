const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        'vocabulary/fromChineseFront': './src/node-types/vocabulary/from-chinese-front.ts',
        'vocabulary/fromChineseBack': './src/node-types/vocabulary/from-chinese-back.ts',
        'vocabulary/toChineseFront': './src/node-types/vocabulary/to-chinese-front.ts',
        'vocabulary/toChineseBack': './src/node-types/vocabulary/to-chinese-back.ts',
        'compare/compareFront': './src/node-types/compare/compare-front.ts',
        'compare/compareBack': './src/node-types/compare/compare-back.ts',
        'vocabulary/styles': './src/node-types/vocabulary/style/styles.scss',
        'compare/styles': './src/node-types/compare/style/styles.scss',
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
            template: './src/node-types/vocabulary/templates/from-chinese-front.html',
            filename: 'vocabulary/from-chinese-front.html',
            inject: 'body',
            chunks: ['vocabulary/fromChineseFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/node-types/vocabulary/templates/from-chinese-back.html',
            filename: 'vocabulary/from-chinese-back.html',
            inject: 'body',
            chunks: ['vocabulary/fromChineseBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/node-types/vocabulary/templates/to-chinese-back.html',
            filename: 'vocabulary/to-chinese-back.html',
            inject: 'body',
            chunks: ['vocabulary/toChineseBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/node-types/vocabulary/templates/to-chinese-front.html',
            filename: 'vocabulary/to-chinese-front.html',
            inject: 'body',
            chunks: ['vocabulary/toChineseFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/node-types/compare/templates/compare.html',
            filename: 'compare/compare-front.html',
            inject: 'body',
            chunks: ['compare/compareFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/node-types/compare/templates/compare.html',
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
