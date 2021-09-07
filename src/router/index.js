import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fisicaii",
    name: "FisicaII",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FisicaII.vue"),
  },
  {
    path: "/fisicaiv",
    name: "FisicaIV",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FisicaIV.vue"),
  },
  {
    path: "/labfisicaiv",
    name: "LabFisicaIV",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LabFisicaIV.vue"),
  },
  {
    path: "/mecatronicaComputacional",
    name: "MecatronicaComputacional",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ComputationalMechatronics.vue"
      ),
  },
  {
    path: "/mecatronicaComputacionalLab",
    name: "MecatronicaComputacionalLab",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ComputationalMechatronicsLab.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
