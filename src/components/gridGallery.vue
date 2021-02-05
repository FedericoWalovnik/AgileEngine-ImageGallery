<template>
  <div class="columns is-multiline">
    <div class="columns is-multiline" v-if="images.length > 0">
      <div class="column is-3" v-for="image in images" :key="image.id">
        <grid-image :id="image.id" :src="image.cropped_picture" alt="image" @imageClick="clickImage">
        </grid-image>
      </div>
    </div>
    <div v-else>Data is loading</div>
    <div class="container is-flex is-justify-content-center">
      <b-pagination
        class=""
        :total="totalPages"
        per-page="10"
        range-before="2"
        range-after="2"
        v-model="current"
        order="is-centered"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GridImage from "./gridImage.vue";

export default {
  name: "GridGalleryView",
  components: { GridImage },
  props: {
    bearerToken: {
      required: true,
      type: String
    }
  },
  methods: {
    async getData() {
      try {
        let response = await axios({
          method: "get",
          url: "http://interview.agileengine.com/images",
          headers: { authorization: this.bearerToken }
        });
        return response;
      } catch (err) {
        console.log(err);
      }
    },
    clickImage(id) {
      console.log(id);
    }
  },
  data() {
    return {
      images: [],
      current: 2,
      totalPages: 26
    };
  },
  async mounted() {
    const rawRequestData = await this.getData();
    const parsedData = rawRequestData.data.pictures;
    this.images = parsedData;
    this.current = rawRequestData.data.page;
    this.totalPages = rawRequestData.data.pageCount;
  }
};
</script>

<style></style>
