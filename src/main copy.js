import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import "@/mock";
// 路由插件
import router from "./router";
// css module文件
// css module文件命名规范必须为xxx.module.css/less
// import styles from "./styles/message.module.css";
// const oDiv = document.createElement("div");
// oDiv.className = styles.message;
// document.body.appendChild(oDiv);

// 获取根元素
// function getComponentRootDom(components, props) {
//     const vm = new Vue({
//         render: (h) => h(components, { props })
//     });
//     vm.$mount();
//     return vm.$el;
// }
// import Icon from "@/components/Icon";
// const dom = getComponentRootDom(Icon, { type: "&#xe60c;" });
// console.log(dom);

// 向实例内注入成员
// Vue.prototype.$print = function() {
//     console.log("hello vue!");
// }
import { showMessage } from "@/utils"
Vue.prototype.$showMessage = showMessage;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');