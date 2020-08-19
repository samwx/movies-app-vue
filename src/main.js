import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import MovieDetail from "./pages/MovieDetail";
import MoviesList from "./pages/MoviesList";
import Favorities from "./pages/Favorities";
import { store } from "./store";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: MoviesList,
    },
    {
      path: "/movie/:id",
      component: MovieDetail,
    },
    {
      path: "/favorities",
      component: Favorities,
    },
  ],
});

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
