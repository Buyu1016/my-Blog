/**
 * 弹出消息
 * @param {String} content  弹出的消息内容 
 * @param {String} type     弹出的消息类型  info  error  success  warn
 * @param {Number} duration 弹出的消息多久消失
 * @param {HTMLElement} container 显示的容器，消息会在该容器的正中，如果不传递则显示到页面的正中
 */
import getComponentRootDom from "@/utils/getComponentRootDom.js";
import Icon from "@/components/Icon";
import showMessageStyles from "@/utils/showMessage.module.less";
export default function(options = {}) {
    const content = options.content || "";
    let type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;;
    let createDiv = document.createElement("div");
    // 根据type进行icon判断
    if (type === "info") {
        type = ["&#xe602;", "info"];
    } else if (type === "error") {
        type = ["&#xe60c;", "error"];
    } else if (type === "success") {
        type = ["&#xe8d7", "success"];
    } else if (type === "warn") {
        type = ["&#xe6bb;", "warn"];
    }
    const iconType = type[0];
    const classType = type[1];
    const el = getComponentRootDom(Icon, { type: iconType });
    createDiv.innerHTML = `
        <span class=${showMessageStyles.icon}>${el.outerHTML}</span>
        <div>${content}</div>
    `;
    // 直接给div添加class，不过要注意css module
    const typeClassName = showMessageStyles[`message-${classType}`];
    createDiv.className = `${showMessageStyles.showmessage} ${typeClassName}`;
    // 判断是否传入父容器
    if (getComputedStyle(container).position === "static") { //如果父容器没有relative定位则增加
        container.style.position = "relative";
    }
    container.appendChild(createDiv);
    createDiv.clientHeight; //强行渲染
    createDiv.style.transform = "translate(-50%,-50%)";
    createDiv.style.opacity = "1";
    setTimeout(() => {
        createDiv.style.transform = "translate(-50%,-50%) translateY(-15px)";
        createDiv.style.opacity = "0";
        createDiv.addEventListener("transitionend", () => {
            createDiv.remove();
            // 如果有回调则执行回调
            options.callback && options.callback();
        }, { once: true })
    }, duration);
}