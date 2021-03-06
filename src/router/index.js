import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout";
import { sessionStorage } from "@/utils/utils";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

/**
 * 自定义路由规则
 * 
 * hidden: Boolean              该路由是否显示在侧边导航栏
 * meta: {
    title: "title"              在侧边导航栏与面包屑中显示的路由名称
    icon : "icon"               在侧边栏中显示的icon图标
    roles: ["admin","editor"]   路由权限标识
   }
 */

// 非权限路由组
export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/homePage",
    onlyMenu: true,
    children: [
      {
        path: "/homePage",
        component: () => import("@/views/welcome/welcome"),
        meta: { title: "仪表盘", icon: "el-icon-yibiaopan" }
      }
    ]
  },
  {
    path: "/table",
    component: Layout,
    meta: {
      title: "Table",
      icon: "el-icon-table"
    },
    children: [
      {
        path: "/basicTable",
        component: () => import("@/views/table/basicTable"),
        meta: {
          title: "基础表格"
        }
      },
      {
        path: "/inline-edit-table",
        component: () => import("@/views/table/inlineEditTable"),
        meta: {
          title: "Table内编辑"
        }
      },
      {
        path: "/drag-table",
        component: () => import("@/views/table/dragTable"),
        meta: {
          title: "拖拽Table"
        }
      },
      {
        path: "/tree-table",
        component: () => import("@/views/table/treeTable"),
        meta: {
          title: "树形表格"
        }
      }
    ]
  },
  {
    path: "/picture",
    component: Layout,
    onlyMenu: true,
    children: [
      {
        path: "/picture-upload",
        component: () => import("@/views/pictureUpload/index"),
        meta: { title: "头像上传", icon: "el-icon-cloud-upload" }
      }
    ]
  },

  {
    path: "/rich-text",
    component: Layout,
    onlyMenu: true,
    children: [
      {
        path: "/rich-text-editor",
        component: () => import("@/views/richText/editor"),
        meta: { title: "富文本编辑器", icon: "el-icon-export" }
      }
    ]
  },
  {
    path: "/icons",
    component: Layout,
    onlyMenu: true,
    children: [
      {
        path: "/icon-index",
        component: () => import("@/views/icons/icons"),
        meta: { title: "自定义图标", icon: "el-icon-info" }
      }
    ]
  },
  {
    path: "/level",
    component: Layout,
    meta: {
      title: "多级菜单",
      icon: "el-icon-align-right"
    },
    children: [
      {
        path: "/level-1-1",
        component: () => import("@/views/levelMenu/level-1-1"),
        meta: { title: "level-1-1" }
      },
      {
        path: "/level-2",
        component: () => import("@/views/levelMenu/level-2-1"),
        meta: { title: "level-2" },
        children: [
          {
            path: "/level-2-1",
            component: () => import("@/views/levelMenu/level-2-2"),
            meta: { title: "level-2-2" }
          }
        ]
      },
      {
        path: "/level-3-2",
        component: () => import("@/views/levelMenu/level-3-2"),
        meta: { title: "level-3-2" }
      }
    ]
  },
  {
    path: "/404",
    component: Layout,
    onlyMenu: true,
    children: [
      {
        path: "/page-404",
        component: () => import("@/views/404/index"),
        meta: { title: "错误页面", icon: "el-icon-error" }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/login"),
    hidden: true
  }
];

// 权限路由组
export const asyncRouterMap = [
  {
    path: "/r4",
    component: Layout,
    children: [
      {
        path: "welcome3",
        component: () => import("@/views/welcome/welcome"),
        meta: {
          title: "导航五",
          icon: "el-icon-setting",
          role: ["admin"]
        }
      }
    ]
  },
  {
    path: "/r5",
    component: Layout,
    children: [
      {
        path: "welcome4",
        component: () => import("@/views/welcome/welcome"),
        meta: {
          title: "导航六",
          icon: "el-icon-setting",
          role: ["admin", "super"]
        }
      }
    ]
  }
];

const router = new Router({
  routes: constantRouterMap
});

// 拦截未登录用户并跳转到登陆页面
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token");
  NProgress.start();
  NProgress.set(0.4);

  /**
   * tip: 关于beforeEach无限循环的问题
   * url: https://segmentfault.com/a/1190000011042794
   */
  if (to.path === "/login") {
    next();
  } else {
    if (!token) {
      next("/login");
    }
  }
  next();
});

// 全局后置钩子, 触发NProgress结束回调
router.afterEach(() => {
  NProgress.done();
});

export default router;
