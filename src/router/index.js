import Vue from 'vue'
// 引用插件
import VueRouter from "vue-router";
import routes from "./routers.js";
import { setTitle } from "@/utils/";
if (!window.VueRouter) {
    // 使用插件需要设置的
    Vue.use(VueRouter);
}
const router = new VueRouter({
    // 路由规则 
    routes,
    // 路由模式     默认为hash      通常设置为history
    mode: "history"
});
router.afterEach((to, from) => {
    setTitle.setRouteTitle(to.meta.title);
});
export default router;