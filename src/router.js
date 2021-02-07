import Vue from "vue";
import Router from "vue-router";
import imagesList from "@/views/imagesList";
import imageDetail from "@/views/imageDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: imagesList,
    },
    {
      path: "/image-detail/:imageId",
      name: "imageDetail",
      component: imageDetail,
    },
  ],
});
