<template>
  <grid-gallery />
</template>

<script>
import api from '@/api'
import gridGallery from '../components/gridGallery.vue'

export default {
  components: { gridGallery },
  async mounted(){
    await api.getBearerToken();

  }
};
</script>

