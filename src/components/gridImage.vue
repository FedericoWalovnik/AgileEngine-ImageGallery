<template>
  <img :src="src" alt="image" />
</template>

<script>
//import axios from "axios";

export default {
  name: "gridImage",
  data() {
    return {
      bearerToken: ""
    };
  },
  props: {
    src: {
      required: true,
      type: String
    }
  }
};
</script>

<style></style>
