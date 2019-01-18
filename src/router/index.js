import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout";

Vue.use(Router);

// 非权限路由组
export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/welcome",
    children: [
      {
        path: "welcome",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "仪表盘", icon: "el-icon-setting" }
      }
    ]
  },
  {
    path: "/r1",
    component: Layout,
    meta: { title: "导航一", icon: "el-icon-setting" },
    children: [
      {
        path: "welcome1",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "导航1-1", icon: "el-icon-setting" }
      },
      {
        path: "welcome2",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "导航1-2", icon: "el-icon-setting" }
      }
    ]
  },
  {
    path: "/r2",
    component: Layout,
    children: [
      {
        path: "welcome3",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "导航二", icon: "el-icon-setting" }
      }
    ]
  },
  {
    path: "/r3",
    component: Layout,
    children: [
      {
        path: "welcome4",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "导航三", icon: "el-icon-setting" }
      }
    ]
  }
];

export default new Router({
  routes: constantRouterMap
});
