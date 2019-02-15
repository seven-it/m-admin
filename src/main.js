import Vue from "vue";

import "@/styles/normalize.css"; // CSS resets
import "@/styles/global.scss"; // global style
import "./assets/font-icon/iconfont.css"; // custom icons

import VeRadar from "v-charts/lib/radar.common"; // 引入雷达图
import VePie from "v-charts/lib/pie.common"; // 引入雷达图
import VeHistogram from "v-charts/lib/histogram.common"; // 引入条形图
import VeLine from "v-charts/lib/line.common"; // 引入折线图

import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import "./plugins/element.js";
import api from "@/api";

Vue.component(VeRadar.name, VeRadar);
Vue.component(VePie.name, VePie);
Vue.component(VeHistogram.name, VeHistogram);
Vue.component(VeLine.name, VeLine);

Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
