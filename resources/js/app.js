window.Vue = require("vue").default;
import _ from "lodash";
import axios from "./plugins/axios.js";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import App from "@/App.vue";
import appInfo from "./config/appInfo";
import "./plugins";
import "./components";
import "./config/mixin";

// Prototype Properties
Vue.prototype.$http = axios;
Vue.prototype._ = _;
Vue.prototype.$appInfo = appInfo;

const app = new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

export default app;
