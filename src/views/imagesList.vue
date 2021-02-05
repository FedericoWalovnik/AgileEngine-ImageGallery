<template>
  <grid-gallery :bearerToken="bearerToken" />
</template>

<script>
import gridGallery from '../components/gridGallery.vue'
export default {
  components: { gridGallery },
  data() {
    return {
      bearerToken: "3b09bd9eb195613bd1d38dc6b8d7539bda205105"
    };
  }
};
</script>

