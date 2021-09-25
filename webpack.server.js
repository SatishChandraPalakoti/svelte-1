const htmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const svelteProceprocess = require("svelte-preprocess")
const nodemonPlugin = require("nodemon-webpack-plugin")
module.exports = {
    entry :{
        main : "./server.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: '[name].js'
    },
    target:"node",
    "node":{
        __dirname: false,
        __filename: false
    },
    resolve:{
        extensions : [".js"],
        modules : [path.resolve("./"), path.resolve("./node_modules")]
    },
    mode: "development",
    module  :{
        rules : [
            {
                test: /\.js$/,
                use: [
                    {loader: "babel-loader"},
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
          template: "dist/index.html",
          filename: "index.html",
          excludeChunks: [ 'server' ]
        })
      ]

}