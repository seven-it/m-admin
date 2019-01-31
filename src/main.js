import Vue from "vue";

import "@/styles/normalize.css"; // CSS resets
import "@/styles/global.scss"; // global style
import "./assets/font-icon/iconfont.css"; // custom icons

import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import "./plugins/element.js";
import api from "@/api";

Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
