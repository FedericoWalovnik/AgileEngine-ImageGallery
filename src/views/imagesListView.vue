<template>
  <grid-gallery />
</template>

<script>
import api from '@/api'
import gridGallery from '../components/gridGallery.vue'

export default {
  components: { gridGallery },
  async created(){
    await api.getBearerToken();
  }
};
</script>

