<template>
  <div class="tem-shair">
    <p class="hi"><i class="fa-sharp fa-solid fa-moon"></i></p>
    <!-- <p class="hi"><i class="fa-solid fa-comment"></i></p> -->
    <!-- <p class="hi"><i class="fa-sharp fa-solid fa-lightbulb"></i></p> -->
    <p class="shair"><i class="fa-sharp fa-solid fa-share-nodes"></i></p>
  </div>
  <nav>
    <div>
      <router-link @click="check($event)" to="/"
        ><i class="fa-solid fa-house"></i></router-link
      ><span v-if="show == '/'">Home</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/about"
        ><i class="fa-solid fa-user"></i></router-link
      ><span v-if="show == '/about'">About</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/portfolio/all"
        ><i class="fa-sharp fa-solid fa-briefcase"></i></router-link
      ><span v-if="show == '/portfolio/all'">Portfolio</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/blogs"
        ><i class="fa-sharp fa-solid fa-blog"></i></router-link
      ><span v-if="show == '/blogs'">blog</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/contact"
        ><i class="fa-solid fa-phone"></i></router-link
      ><span v-if="show == '/contact'">contact</span>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "HomeTo",
  data() {
    return {
      show: location.pathname,
    };
  },
  methods: {
    check(event) {
      this.show = event.target.pathname;
    },
  },
};
</script>
<style scoped>
.tem-shair {
  padding: 23px;
  display: flex;
  justify-content: space-between;
}
.tem-shair p {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  font-size: 25px;
  color: aliceblue;
  background-color: rgba(50, 50, 50, 0.65);
  cursor: pointer;
}
.shair {
  color: greenyellow !important;
}
nav {
  position: fixed;
  background-color: #040404;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  z-index: 1;
}
nav div {
  width: 57px;
  height: 57px;
  text-align: center;
  line-height: 57px;
}
nav div a {
  position: relative;
  display: inline-block;
  color: white;
  font-size: 22px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: 0.3s all linear;
}
nav a.router-link-exact-active {
  background-color: greenyellow;
  color: black;
  transform: scale(1.1);
}
span {
  display: inline-block;
  transform: translateY(-110px);
  font-size: 19px;
  color: greenyellow;
}
nav a::after {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  border-radius: 50px;
  transition: 0.4s all linear;
  top: 90px;
  left: -10px;
}
nav a.router-link-exact-active::after {
  background-color: greenyellow;
  top: 62px;
}
@media screen and (min-width: 768px) {
  .tem-shair {
    padding: 0;
    position: absolute;
    right: 40px;
    top: 35px;
    flex-direction: column;
  }
  .tem-shair p {
    width: 47px;
    height: 47px;
    line-height: 47px;
  }
  .shair {
    margin-top: 18px;
  }
  nav {
    right: 0;
    top: 220px;
    width: 90px;
    height: 100%;
    flex-direction: column;
    justify-content: start;
    background-color: transparent;
  }
  nav div {
    margin-top: 30px;
  }
  nav div a {
    font-size: 25px;
  }
  span {
    transform: translate(-65px, -65px);
  }
  nav a::after {
    left: 100px;
    top: -10px;
  }
  nav a.router-link-exact-active::after {
    background-color: greenyellow;
    left: 70px;
    top: -10px;
  }
}
</style>