import Vuex from "vuex";
import Vue from "vue";
import setting from "./setting.js";
import banner from "./banner.js";
import about from "./about.js";
import project from "./project.js";
if (!window.VueStore) {
    Vue.use(Vuex);
}
const store = new Vuex.Store({
    modules: {
        setting,
        banner,
        about,
        project
    },
    strict: true, // 开启严格模式，只允许在mutations内进行更改数据
});
export default store;