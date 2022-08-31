const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

module.exports = {
  mode: NODE_ENV,
  resolve: {
    extensions: [".js", ".ts"]
  },
  optimization: {
    minimize: IS_PROD,
    minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin()]
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "./build"),
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
        exclude: path.resolve(__dirname, "./node_modules"),
        use: [{
          loader: MiniCssExtractPlugin.loader
        },
          {
            loader: "css-loader",

            options: {
              sourceMap: !IS_PROD,
              // modules:{
              //   localIdentName: '[hash:base64:5]'
              // }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: !IS_PROD
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !IS_PROD
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
          template: path.resolve(__dirname, "./index.html")
        }
    ),
    new MiniCssExtractPlugin({
      filename: "style-[hash].css"
    })
  ],
  devServer: {
    open: true,
    hot: true,
    watchFiles: [
      path.resolve(__dirname, "./index.html")
    ]
  }
};
