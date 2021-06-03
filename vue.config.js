module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.zhihu.com"
            }
        }
    },
    configureWebpack: require("./webpack.config.js")
}