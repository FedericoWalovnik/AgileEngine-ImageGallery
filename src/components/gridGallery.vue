<template>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="image in images" :key="image.id">
      <grid-image :src="image.url"></grid-image>
    </div>
  </div>
</template>

<script>
import GridImage from "./gridImage.vue";
export default {
  name: "GridGalleryView",
  components: { GridImage },
  methods: {
    getData() {
      return [
        {
          id: 1,
          url:
            "https://cdlxmainwebpagedocuments.s3.amazonaws.com/wp-content/uploads/2020/08/28193456/cardlytics_open_graph_01.png",
          alt: "imagen"
        },
        {
          id: 2,
          url:
            "https://1ycbx02rgnsa1i87hd1i7v1r-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/cardlytics_01-e1530134336306.jpg",
          alt: "imagen"
        },
        {
          id: 3,
          url: "https://miro.medium.com/max/800/1*Tz0yu7enDZ-QLwLVTohIAQ.jpeg",
          alt: "imagen"
        },
        {
          id: 4,
          url:
            "https://s.wsj.net/public/resources/images/BN-FG494_cardly_G_20141028195154.jpg",
          alt: "imagen"
        },
        {
          id: 5,
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-vaFCporJ23zPm0mBtzxReyEGl8OJ_tojA&usqp=CAU",
          alt: "imagen"
        },
        {
          id: 6,
          url:
            "https://i.pinimg.com/originals/88/a4/37/88a437688399b159c1d3164e8da77051.jpg",
          alt: "imagen"
        },
        {
          id: 7,
          url:
            "https://cdlxmainwebpagedocuments.s3.amazonaws.com/wp-content/uploads/2020/08/28193456/cardlytics_open_graph_01.png",
            alt: "imagen"
        }
      ];
    }
  },
  data() {
    return {
      images: []
    };
  },
  mounted() {
    this.images = this.getData();
  }
};
</script>

<style></style>
