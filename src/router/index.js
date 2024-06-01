"use strict";
import { createRouter, createWebHashHistory } from "vue-router";

const LoginView = () => import("@/views/LoginView.vue");

const router = createRouter({
  strict: true,
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login.html"
    },
    {
      meta: {
        title: "登录"
      },
      path: "/login.html",
      name: LoginView.name,
      component: LoginView
    }
  ]
});

/**
 * 全局前置守卫
 * Router.beforeEach 每次发生路由的导航跳转时，都会触发全局前置守卫，因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制
 */
router.beforeEach(async (to, from, next) => {
  console.log("全局前置守卫：", to, from, next());
});

/**
 * 全局解析守卫
 * Router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置
 */
router.beforeResolve(async (to, from, next) => {
  console.log("全局解析守卫：", to, from, next());
});

/**
 * 全局后置守卫
 * Router.afterEach 对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。
 */
router.afterEach(async (to, from, failure) => {
  console.log("全局后置守卫：", to, from, failure);
});

export default router;
