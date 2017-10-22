const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        ferilskra: path.resolve(__dirname, "src/ferilskra.js")
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: { minimize: true }
                        },
                    ],
                    publicPath: path.resolve(__dirname, "public/dist")
                })
            }
        ]
    },
    stats: "normal",
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(["public/dist"])
    ]
};