<template>
  <div class="container is-fluid imageContainer">
    <template v-if="!(imageData === '')">
      <b-modal
        v-model="isModalActive"
        :active="isModalActive"
        @close="handleCloseImage"
        icon-pack="fa"
      >
        <p class="image is-5by3">
          <single-image
            class="image"
            :src="imageData.full_picture"
            :alt="imageData.author"
          />
        </p>
        <image-details
          :authorName="imageData.author"
          :cameraModel="imageData.camera"
          :hashtags="imageData.hashtags"
        />
      </b-modal>
    </template>
    <template v-else>
      <b-loading :active="isLoading"></b-loading>
    </template>
  </div>
</template>

<script>
import api from "@/api";
import singleImage from "../components/singleImage.vue";
import ImageDetails from "../components/imageDetails.vue";

export default {
  components: { singleImage, ImageDetails },
  name: "imageDetail",
  data() {
    return {
      imageData: "",
      isLoading: true,
      isModalActive: true
    };
  },
  methods: {
    handleCloseImage() {
      this.$router.push({ name: "imageGallery" });
    }
  },
  async mounted() {
    const id = this.$route.params.imageId;
    try {
      const imageDetails = await api.getImageDetails(id);
      this.imageData = imageDetails.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
