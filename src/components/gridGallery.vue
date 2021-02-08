<template>
  <div class="container is-fluid mt-5">
    <div class="imageGrid" v-if="images.length > 0">
      <div class="photo" v-for="image in images" :key="image.id">
        <grid-image
          :id="image.id"
          :src="image.cropped_picture"
          alt="image"
          @imageClick="handleImageClick"
        >
        </grid-image>
      </div>
    </div>
    <template v-else>
      <b-loading :active="isLoading"></b-loading>
    </template>
    <b-pagination
      class=""
      :total="totalElements"
      per-page="10"
      range-before="2"
      range-after="2"
      v-model="currentPage"
      order="is-centered"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      icon-pack="fa"
    >
    </b-pagination>
    <image-detail-popup
      :show="showPopup"
      :imageId="imageId"
      @closePopup="handleClosePopup"
      @previousImage="changeImage"
      @nextImage="changeImage"
    />
  </div>
</template>

<script>
import api from "@/api";
import GridImage from "./gridImage.vue";
import imageDetailPopup from "./imageDetailPopup.vue";

export default {
  name: "GridGalleryView",
  components: { GridImage, imageDetailPopup },
  methods: {
    async getData(page) {
      try {
        await api.ensureBearerToken();
        const response = await api.getImages(page);
        return response;
      } catch (err) {
        console.log(err);
      }
    },
    async updateData() {
      const rawRequestData = await this.getData(this.currentPage);
      this.images = rawRequestData.data.pictures;
      this.current = rawRequestData.data.page;
      this.totalElements = rawRequestData.data.pageCount * 10;
      this.isLoading = false;
    },
    handleImageClick(clickedImageId) {
      this.showPopup = true;
      this.imageId = clickedImageId;
    },
    handleClosePopup() {
      this.showPopup = false;
    },
    changeImage(currentId, action) {
      let indexOfCurrentImage = this.images.findIndex(
        image => image.id == currentId
      );
      if (action === "previous") {
        if (indexOfCurrentImage - 1 < 0) {
          this.imageId = this.images[9].id;
        } else {
          this.imageId = this.images[indexOfCurrentImage - 1].id;
        }
      } else {
        if (indexOfCurrentImage + 1 > 9) {
          this.imageId = this.images[0].id;
        } else {
          this.imageId = this.images[indexOfCurrentImage + 1].id;
        }
      }
    }
  },
  data() {
    return {
      images: [],
      currentPage: 1,
      totalElements: 26,
      isLoading: true,
      showPopup: false,
      imageId: ""
    };
  },
  watch: {
    async currentPage() {
      await this.updateData();
    }
  },
  async mounted() {
    await this.updateData();
  }
};
</script>

<style scoped>
.imageGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-items: center;
  align-items: center;
}
</style>
