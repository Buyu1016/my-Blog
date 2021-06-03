// 防抖函数 就是一定时间内只能触发一次函数
export default function(fn, duration = 200) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration)
    }
}