<template>
  <div class="container is-fluid imageContainer">
    <template v-if="!(imageData === '')">
      <b-modal
        v-model="isModalActive"
        :active="isModalActive"
        @close="handleCloseImage"
        icon-pack="fa"
      >
        <div class="is-flex is-justify-content-space-around">
          <b-icon
            class="has-text-white is-clickable"
            icon="arrow-circle-left"
            size="is-large"
            pack="fa"
            @click="previousImage"
          >
          </b-icon>
          <b-icon
            class="has-text-white is-clickable"
            icon="arrow-circle-right"
            size="is-large"
            pack="fa"
            @click="nextImage"
          >
          </b-icon>
        </div>
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
          :hashtags="imageData.tags ? imageData.tags : 'none'"
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
    },
    nextImage(){ this.$emit('nextImage', this.id); }

  },
  async mounted() {
    const id = this.$route.params.imageId;
    try {
      await api.ensureBearerToken();
      const imageDetails = await api.getImageDetails(id);
      this.imageData = imageDetails.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
