const path = require("path");

const HtmlWebpackPluin = require("html-webpack-plugin");

const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js",
        print:"./src/print.js"
    },

    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname, "dist")
    },

    plugins:[
        new HtmlWebpackPluin({
            title:"插件生成的代码",
            template:"src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}