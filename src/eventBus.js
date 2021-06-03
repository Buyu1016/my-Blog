// 事件总线
// let listeners = {};
// export default {
//     // 监听事件
//     $on(eventName, eventFun) {
//         // 如果在总线中没有这个事件则加入这个事件，set用于去重
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         // 把事件处理函数加入到事件的value中
//         listeners[eventName].add(eventFun);
//     },
//     // 取消监听
//     $off(eventName, eventFun) {
//         // 先判断这个事件是否存在，如果不存在则直接返回即可
//         if (!listeners[eventName]) {
//             return;
//         }
//         // 如果存在则进行delete删除
//         listeners[eventName].delete(eventFun);
//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         // 判断事件是否存在
//         if (!listeners[eventName]) {
//             return;
//         }
//         // 遍历执行这个事件所有的Function
//         for (const iterator of listeners[eventName]) {
//             iterator(...args);
//         }
//     }
// }

// 利用vue创建事件总线
import Vue from 'vue';
/**
 * 约定的第一个事件名字为mainScrollMove
 * 作用为监听博客内容中的滚动条
 * 传出的数据为一个数组，第一位是scroll所在的dom,一个是内容真实高度dom
 */
/**
 * 约定的第二个事件名字为allBlogsScrollMove
 * 作用为分页博客内容中的滚动条
 * 传出的数据为一个Dom,为滚动区的滚动条所在Dom
 */
const vNode = new Vue({});
Vue.prototype.$eventBus = vNode;
export default vNode;