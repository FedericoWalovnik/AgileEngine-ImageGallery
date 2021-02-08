<template>
  <img class="is-clickable" :src="src" :alt="alt" @click="emitId" />
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
  },
  methods: {
    emitId(){
      this.$emit('imageClick', this.id);
    }
  }
};
</script>

<style></style>
