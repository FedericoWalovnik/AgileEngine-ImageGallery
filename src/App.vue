<template>
  <main>
    <grid-gallery
      src="https://agileengine.com/wordpress/wp-content/uploads/2018/12/logo.png"
    ></grid-gallery>
  </main>
</template>

<script>
import GridGallery from './components/gridGallery.vue';
export default {
  name: "App",
  components: { GridGallery },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
