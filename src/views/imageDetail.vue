<template>
  <div class="container is-fluid">
    <template v-if="!(imageData === '')">
      <single-image class="image" :src="imageData.full_picture" :alt="imageData.author" />
    </template>
    <template v-else>
      <b-loading :active="isLoading"></b-loading>
    </template>
  </div>
</template>

<script>
import api from "@/api";
import singleImage from "../components/singleImage.vue";

export default {
  components: { singleImage },
  name: "imageDetail",
  data() {
    return {
      imageData: '',
      isLoading: true
    };
  },
  methods: {
    async getData() {
      const id = this.$route.params.imageId;
      try {
        const imageDetails = await api.getImageDetails(id);
        this.imageData = imageDetails.data;
        console.log(this.imageData);
      } catch (error) {
        console.error(error);
      }
    }
  },
  async mounted() {
    const id = this.$route.params.imageId;
    try {
      const imageDetails = await api.getImageDetails(id);
      this.imageData = imageDetails.data;
      console.log(this.imageData);
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
.image{
    width: 100%;
}
</style>
