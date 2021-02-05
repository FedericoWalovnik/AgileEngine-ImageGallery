import Vue from "vue";
import Router from "vue-router";
import imagesList from "@/views/imagesList";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: imagesList,
    },
  ],
});
