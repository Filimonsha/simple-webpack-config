const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html")
        }),

    ],
    devServer: {
        open: true,
        hot: true,
        watchFiles:[
            path.resolve(__dirname,'./index.html')
        ]
    }
}
