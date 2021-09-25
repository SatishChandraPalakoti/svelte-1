const htmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const svelteProceprocess = require("svelte-preprocess")

module.exports = {
    entry :{
        main : "./index.ts"
    },
    output: {
        filename : "[name]-bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve:{
        extensions : [".mjs",".ts",".tsx",".js",".svelte"],
        modules : [path.resolve("./"), path.resolve("./node_modules")]
    },
    mode: "development",
    module  :{
        rules : [
            {
                test: /\.(svelte)$/,
                use: [
                    {loader: "babel-loader"},
                    {
                        loader: "svelte-loader",
                        options:{
                            emitCss: true,
                            preprocess: svelteProceprocess({})
                        }
                    }
                ]
            },
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
              }
        ]
    },
    plugins : [new htmlWebpackPlugin({ template : "./public/index.html"})],
    // devServer : {
    //     contentBase: path.join(__dirname, "./dist"),
    //     compress: true,
    //     port: 3000
    // }

}