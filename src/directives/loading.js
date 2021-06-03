// 指令配置对象
// export default {
//     bind(el, binding) {
//         console.log(el, binding);
//     },
//     update(el, binding) {
//         console.log(el, binding);
//     }
// }
// 配置简化
// 当bind和update所作的事情相同时，可以简化为当前这样
import loadingUtl from "@/assets/loading.svg";
import styles from "@/directives/loading.module.less"
export default function(el, binding) {
    // 根据binding.vue决定创建或删除
    if (binding.value) { // 正在加载
        if (!isExistence(el)) {
            createImg(el);
        }
    } else { // 加载完毕，清除元素
        const oImg = el.querySelector("img[data-loading=true]");
        if (oImg) {
            oImg.remove();
        }
    }
}

function isExistence(el) {
    return el.querySelector("img[data-loading=true]");
}

function createImg(el) {
    const createImg = document.createElement("img");
    createImg.dataset.loading = "true";
    createImg.src = loadingUtl;
    createImg.className = styles.loading;
    el.appendChild(createImg);
}