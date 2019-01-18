import Vue from "vue";
import "@/styles/normalize.css"; // CSS resets
import "@/styles/global.scss"; // global style
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
