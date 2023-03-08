import menus from "./menu";

export default {
    namespaced: true,
    state: {
        dark: false,
    },
    getters: {
        links(state, getters, rootState) {
            return menus(rootState);
        },
    },
    mutations: {
        SET_DARK_MODE(state) {
            state.dark = !state.dark;
        },
    },
    actions: {},
};
