const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        writingFrontPreview: './src/preview/writing-front-preview.ts',
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
            title: 'Writing Front Preview',
            filename: 'writing-front-preview.html',
            inject: 'body',
            chunks: ['writingFrontPreview'],
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
        open: ['/writing-front-preview.html'],
    },
};
