<template>
  <div class="is-flex is-flex-direction-column details has-text-white is-align-items-center is-justify-content-center">
    <h3 class="is-size-4"><span class="has-text-weight-medium">Author: </span>{{ authorName }}</h3>
    <p class="is-size-4"><span class="has-text-weight-medium">Camera: </span>{{ cameraModel }}</p>
    <p class="is-size-4"><span class="has-text-weight-medium">Tags: </span>{{ hashtags }}</p>
  </div>
</template>

<script>
export default {
  name: "imageDetails",
  props: {
    authorName: {
      require: true,
      type: String
    },
    cameraModel: {
      require: true,
      type: String
    },
    hashtags: {
      require: true,
      type: String
    }
  }
};
</script>

<style>
.details{
    height: 150px;
    background-color: rgba(0, 0, 0, 0.212);
    z-index: 100;
}
</style>
