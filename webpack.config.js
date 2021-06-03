const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
if (process.env.NODE_ENV === 'production') { //生产环境
    module.exports = {
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        },
    };
} else { // 开发环境
    module.exports = {

    }
}