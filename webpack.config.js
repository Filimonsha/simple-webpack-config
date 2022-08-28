const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer')
const loader = require("ts-loader");
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    mode: NODE_ENV,
    entry: {
        main: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: "ts-loader"
            },
            {
                test: /\.(scss|css)$/,
                exclude:path.resolve(__dirname,"./node_modules") ,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {

                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
            template: path.resolve(__dirname, "./index.html"),
        }
        ),
        new MiniCssExtractPlugin({
            filename:"style-[hash].css"
        })
    ],
    devServer: {
        open: true,
        hot: true,
        watchFiles: [
            path.resolve(__dirname, './index.html')
        ]
    }
}
