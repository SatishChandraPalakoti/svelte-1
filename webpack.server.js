const path = require("path")
var NodemonPlugin = require("nodemon-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const htmlWebpackPlugin = require('html-webpack-plugin');
const {
    dirname
} = require("path");

module.exports = {
    entry: {
        server: "./server.js"
    },
    mode: "development",
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: "/",
        filename: '[name]-bundle.js'
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }]
            }
        ]
    },
    plugins: [
        new NodemonPlugin(),
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            excludeChunks: ['server']
        })
    ]
}