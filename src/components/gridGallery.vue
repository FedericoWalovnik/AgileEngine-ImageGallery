<template>
  <div class="container is-fluid">
    <div class="columns is-multiline is-justify-content-center" v-if="images.length > 0">
      <div class="column is-3 " v-for="image in images" :key="image.id">
        <grid-image :id="image.id" :src="image.cropped_picture" alt="image">
        </grid-image>
        <div class="container is-flex is-justify-content-center"></div>
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
  </div>
</template>

<script>
import api from "@/api";
import GridImage from "./gridImage.vue";

export default {
  name: "GridGalleryView",
  components: { GridImage },
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
    }
  },
  data() {
    return {
      images: [],
      currentPage: 1,
      totalElements: 26,
      isLoading: true
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

<style></style>
