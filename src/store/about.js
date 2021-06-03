import { getAboutData } from "../api/about.js"
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
        async asyncSetData(store, payload) {
            if (store.state.data) {
                return;
            }
            store.commit("setLoading", true);
            const resp = await getAboutData();
            store.commit("setData", resp);
            store.commit("setLoading", false);
        }
    }
}