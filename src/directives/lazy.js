import imgLoading from "@/assets/img-occupy-position.gif"
// 导入事件总线
import vN from "@/eventBus.js"
// 防抖
import { preventShake } from "@/utils"
// 存储需要加载图片的DOM及其src路径
let allImg = [];
/**
 * 处理图片
 * @param {*} item 
 */
function handleImg(item) {
    const viewHeight = document.documentElement.clientHeight;
    const imgRect = item.dom.getBoundingClientRect();
    if (imgRect.top < -imgRect.height || imgRect.top > viewHeight) {
        // 图片不在视口中
        item.dom.src = imgLoading;
    } else {
        // 图片在视口中
        // 加载图片
        if (item.dom.src == (location.origin + imgLoading)) {} else {
            item.dom.src = imgLoading;
        }
        const img = new Image();
        img.onload = () => {
            item.dom.src = img.src;
            allImg = allImg.filter((i) => {
                return i !== item;
            });
        };
        img.src = item.src;
    }
}

function setCorrectImg() {
    for (const item of allImg) {
        handleImg(item);
    }
}

vN.$on('allBlogsScrollMove', preventShake(setCorrectImg, 100));
vN.$on("allProjectScrollMove", preventShake(setCorrectImg, 100));
export default {
    inserted(el, binding) {
        const img = {
            dom: el, //指令绑定的DOM
            src: binding.value //所传入的值
        };
        allImg.push(img);
        setCorrectImg(img);
    },
    // 解除指令和元素的绑定的时候清空原来存储的allImg
    unbind(el) {
        allImg = allImg.filter((item) => {
            // 如果item.dom跟本次解绑的dom是同一个dom，则保留下来
            return item.dom !== el;
        });
    }
}