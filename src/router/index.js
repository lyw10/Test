import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../views/login.vue";
import About from "../views/about.vue";
import badRoute from "../components/badRoute.vue";
import Project from '../views/project.vue'

Vue.use(Router)

export default new Router({
    mode: "hash",
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
  routes: [
    {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/project/:id",
    name: "PROJECT",
    component: Project,
    // component: () => import("../views/project.vue"),
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/admin",
    component: () => import("../views/admin.vue"),
  },
  {
    path: "/*", // should be last, otherwise matches everything
    // redirect:"/about"
    component: badRoute,
    name: "NOT FOUND",
  },
  ]
})
