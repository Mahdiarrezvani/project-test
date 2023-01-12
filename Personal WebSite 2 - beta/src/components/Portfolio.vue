<template>
  <div class="main">
    <p class="title-main"><span></span>portfolio</p>
    <div class="container-portfolio">
      <nav>
        <router-link to="/portfolio/all">all</router-link>
        <router-link to="/portfolio/logo">logo</router-link>
        <router-link to="/portfolio/video">video</router-link>
        <router-link to="/portfolio/graphicDesign">graphic design</router-link>
      </nav>
      <div class="ShowPortfolio">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortFolio",
};
</script>

<style scoped>
.title-main span {
  width: 150px;
}
.title-main span::after {
  right: -3px;
}
nav {
  display: none;
  text-align: center;
  margin-bottom: 50px;
}
nav a {
  text-transform: uppercase;
  margin-right: 50px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  padding-bottom: 7px;
}
nav a.router-link-exact-active {
  border-bottom: 1px solid greenyellow;
}
@media screen and (min-width: 1200px) {
  .main {
    padding: 50px;
    background-color: #040404;
  }
  .title-main {
    text-align: start;
  }
  nav {
    display: block;
  }
}
</style>