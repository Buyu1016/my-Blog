import axios from "axios";
import showMessage from "../utils/showMessage.js";

// axios实例
const ins = axios.create();
// 拦截请求，自己可以操作请求的结果，但是最后要返回数据，作为get获取的数据
ins.interceptors.response.use((resp) => {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1000
        });
    }
    return resp.data.data;
});
export default ins;