<template>
  <div
    class="image-container"
    v-for="(logo, index) in portfolios.logo"
    :key="index"
  >
    <img :src="logo" />
  </div>
  <div
    class="image-container"
    v-for="(video, index) in portfolios.video"
    :key="index"
  >
    <img :src="video" />
  </div>
  <div
    class="image-container"
    v-for="(graphicDesign, index) in portfolios.graphicDesign"
    :key="index"
  >
    <img :src="graphicDesign" />
  </div>
  <link rel="stylesheet" href="../../assets/style-portfolio/style.css" />
</template>

<script>
import { portfolios } from "../../mixins.js";
export default {
  name: "AllPortfolio",
  setup() {
    return { portfolios };
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-radius: 10px;
}
img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 576px) {
  .image-container {
    width: 46%;
    display: inline-block;
    margin-left: 20px;
  }
}
@media screen and (min-width: 1200px) {
  .image-container {
    width: 31%;
    display: inline-block;
    margin-left: 20px;
  }
}
</style>