import { getNewData } from "../api/banner.js"
export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
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
        async asyncSetData(store, payload) {
            if (store.state.data.length) {
                return;
            }
            store.commit("setLoading", true);
            const resp = await getNewData();
            store.commit("setData", resp);
            store.commit("setLoading", false);
        }
    }
}