import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../views/login.vue";
import About from "../views/about.vue";
import badRoute from "../components/badRoute.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
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
    // component: Project,
    component: () => import("../views/project.vue"),
    props: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/*", // should be last, otherwise matches everything
    component: badRoute,
    name: "NOT FOUND",
  },
  ]
})
