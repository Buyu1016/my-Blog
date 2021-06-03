import Vue from 'vue'
/**
 * 
 * @param {String} component    组件名 
 * @param {String} props 传入的组件所需的数据
 * @returns 
 */
export default function(component, props) {
    const vm = new Vue({
        render: h => h(component, { props })
    })
    vm.$mount();
    return vm.$el;
}