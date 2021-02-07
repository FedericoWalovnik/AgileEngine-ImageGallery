<template>
  <router-link :to="{ name: 'imageDetail', params: {imageId: id }}"
>
    <img class="is-clickable" :src="src" :alt="alt" />
  </router-link>
</template>

<script>
export default {
  name: "gridImage",
  props: {
    id: {
      required: true,
      type: String
    },
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  }
};
</script>

<style></style>
