import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/layout/home.vue";
import Category from "@/views/layout/category.vue";
import Cart from "@/views/layout/cart";
import User from "@/views/layout/user";
import Layout from "@/views/layout/index.vue";

import store from "@/store";

const Login = () => import("@/views/login");
const Search = () => import("@/views/search/index.vue");
const SearchList = () => import("@/views/search/list.vue");
const Pay = () => import("@/views/pay");
const MyOrder = () => import("@/views/myorder");
const ProDetail = () => import("@/views/prodetail");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "/login", component: Login },
    {
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "category",
          component: Category
        },
        {
          path: "cart",
          component: Cart
        },
        {
          path: "user",
          component: User
        }
      ]
    },
    { path: "/search", component: Search },
    { path: "/searchlist", component: SearchList },
    { path: "/pay", component: Pay },
    { path: "/myorder", component: MyOrder },

    // 动态路由传参
    { path: "/prodetail/:id", component: ProDetail }
  ]
});

// 全局前置导航守卫\
const authUrl = ["/pay", "/myorder"];
router.beforeEach((to, from, next) => {
  // 1. to   往哪里去， 到哪去的路由信息对象
  // 2. from 从哪里来， 从哪来的路由信息对象
  // 3. next() 是否放行
  //    如果next()调用，就是放行
  //    next(路径) 拦截到某个路径页面
  const token = store.getters.token;
  if (!authUrl.includes(to.path)) {
    next();
    return;
  }

  if (token) {
    next();
  } else {
    next("/login");
  }
});

export default router;
