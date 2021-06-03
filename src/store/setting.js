import getSetting from "../api/setting.js"
import { setTitle } from "@/utils"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(store, payload) {
            store.loading = payload;
        },
        setData(store, payload) {
            store.data = payload;
        }
    },
    actions: {
        async asyncSetData(store, ) {
            store.commit("setLoading", true);
            const resp = await getSetting();
            store.commit("setData", resp);
            store.commit("setLoading", false);
            if (resp.favicon) {
                const oldLink = document.querySelector("link[rel=icon]");
                if (oldLink) {
                    oldLink.remove();
                }
                // <link rel="shortcut icon" type="image/x-icon" href="ico图片位置" />
                const oLink = document.createElement("link");
                oLink.rel = "shortcut icon";
                oLink.type = "images/x-icon";
                oLink.href = resp.favicon;
                document.head.appendChild(oLink);
            }
            if (resp.siteTitle) {
                setTitle.setStoreTitle(resp.siteTitle);
            }
        }
    }
}