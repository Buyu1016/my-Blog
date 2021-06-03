import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import "@/styles/markdown.css"
import "highlight.js/styles/github.css"
import "./eventBus.js"
import "./mock"
import store from "./store"
// 路由插件
import router from "./router";
import { showMessage } from "@/utils"
// 全局注册指令
/**
 * 加载指定
 */
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);
Vue.prototype.$showMessage = showMessage;

// 提前加载全局设置
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
store.dispatch("setting/asyncSetData");

// test 
// import { getBlogMessages, postComments, getPageComments } from "@/api/blog.js";
// getBlogMessages().then((resp) => {
//     console.log(resp);
// })
// postComments({
//     nickname: "CodeGorgeous",
//     content: "期待再次相逢的那天！",
//     blogId: 1
// }).then(resp => {
//     console.log(resp);
// })
// getPageComments("1").then(resp => { console.log(resp) })

//测试事件总线
// import eventBus from "./eventBus.js";
// function handler1(data) {
//     console.log("handler1", data);
// }
// function handler2(data) {
//     console.log("handler2", data);
// }
// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;