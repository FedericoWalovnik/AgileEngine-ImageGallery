<template>
  <div v-if="show" class="container is-fluid imageContainer">
    <template v-if="!(imageData === '')">
      <b-modal :active="show" @close="handleCloseImage" icon-pack="fa">
        <div class="is-flex is-justify-content-space-around">
          <b-icon
            class="has-text-white is-clickable"
            icon="arrow-circle-left"
            size="is-large"
            pack="fa"
            @click.native="previousImage"
          >
          </b-icon>
          <b-icon
            class="has-text-white is-clickable"
            icon="arrow-circle-right"
            size="is-large"
            pack="fa"
            @click.native="nextImage"
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
  <div v-else></div>
</template>

<script>
import api from "@/api";
import singleImage from "../components/singleImage.vue";
import ImageDetails from "../components/imageDetails.vue";

export default {
  components: { singleImage, ImageDetails },
  name: "imageDetailPopup",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    imageId: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      imageData: "",
      isLoading: true,
      isModalActive: true
    };
  },
  watch: {
    async imageId(id){
      if (id) {
        try {
          await api.ensureBearerToken();
          const imageDetails = await api.getImageDetails(this.imageId);
          this.imageData = imageDetails.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  },
  methods: {
    handleCloseImage() {
      this.isModalActive = false;
      this.$emit("closePopup");
    },
    previousImage(){
      this.$emit('previousImage', this.imageId,'previous')
    },
    nextImage(){
      this.$emit('nextImage', this.imageId, 'next')
    }
  },
};
</script>

<style scoped></style>
