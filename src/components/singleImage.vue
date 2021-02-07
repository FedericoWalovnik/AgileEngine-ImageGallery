<template>
    <img class="is-clickable" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "gridImage",
  props: {
    src: {
      required: true,
      type: String
    },
    alt: {
      required: true,
      type: String
    }
  },
};
</script>

<style></style>
