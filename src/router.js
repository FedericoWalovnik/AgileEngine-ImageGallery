import Vue from "vue";
import Router from "vue-router";
import imagesList from "@/views/imagesListView";
import imageDetail from "@/views/imageDetailView";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "imageGallery",
      component: imagesList,
    },
    {
      path: "/image-detail/:imageId",
      name: "imageDetail",
      component: imageDetail,
    },
  ],
});
