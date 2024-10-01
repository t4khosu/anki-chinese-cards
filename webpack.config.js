const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
    entry: {
        listeningFront: './src/listening-front.ts',
        listeningBack: './src/listening-back.ts',
        writingFront: './src/writing-front.ts',
        writingBack: './src/writing-back.ts',
        compareFront: './src/compare-front.ts',
        compareBack: './src/compare-back.ts',
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
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
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
            filename: 'listening-front.html',
            inject: 'body',
            chunks: ['listeningFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/listening-back.html',
            filename: 'listening-back.html',
            inject: 'body',
            chunks: ['listeningBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/writing-back.html',
            filename: 'writing-back.html',
            inject: 'body',
            chunks: ['writingBack'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/writing-front.html',
            filename: 'writing-front.html',
            inject: 'body',
            chunks: ['writingFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/compare-front.html',
            filename: 'compare-front.html',
            inject: 'body',
            chunks: ['compareFront'],
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/compare-front.html',
            filename: 'compare-back.html',
            inject: 'body',
            chunks: ['compareBack'],
        }),

        new HtmlInlineScriptPlugin(),
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
