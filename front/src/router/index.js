import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
          path: "/home",
          name: "home",
          component: () => import (/* webpackChunkName: "home" */ "../views/Home.vue")
      },
      {
          path: "/about",
          name: "about",
          component: () => import (/* webpackChunkName: "about" */ "../views/About.vue")
      },
    ]
});

export default router;