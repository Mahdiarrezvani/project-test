<template>
  <div class="main">
    <div class="blur"></div>
    <div class="show-blog">
      <router-link class="close" to="/blogs">X</router-link>
      <p class="detalis">post detalis</p>
      <div class="icon-top">
        <span class="person"
          ><i class="fa-solid fa-user"></i>{{ blog.person }}</span
        >
        <i class="fa-sharp fa-solid fa-calendar"></i>
        <span class="date"><i></i>{{ blog.date }}</span>
        <span class="work"
          ><i class="fa-solid fa-user"></i>{{ blog.work }}</span
        >
      </div>
      <p class="title">{{ blog.title }}</p>
      <img :src="blog.image" />
      <p class="text">{{ blog.text }}</p>
      <p class="text">{{ blog.textFull }}</p>
      <p class="text">{{ blog.text }}</p>
      <p class="text">{{ blog.textFull }}</p>
      <p class="text">{{ blog.text }}</p>
    </div>
  </div>
</template>

<script>
import { blogs } from "../../mixins.js";
import { useRoute } from "vue-router";
export default {
  name: "userS",
  setup() {
    let getBlog = useRoute().params;
    let blogID = getBlog.id;
    let blog = blogs[blogID];
    return { blog };
  },
};
</script>

<style scoped>
.main {
  padding: 25px;
  background-color: #040404;
}
.blur {
  display: none;
}
.detalis {
  color: greenyellow;
  text-align: center;
  font-size: 23px;
  font-weight: bold;
}
.icon-top {
  margin: 20px 0;
}
.icon-top span {
  margin-right: 10px;
  font-size: 15px;
}
.icon-top i {
  color: greenyellow;
  margin-right: 10px;
}
.show-blog img {
  width: 100%;
  height: 220px;
  border-radius: 10px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
}
.text {
  margin: 15px 0;
  color: rgb(200, 200, 200);
  font-size: 15px;
}
.close {
  position: absolute;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
@media screen and (min-width: 768px) {
  .blur {
    background-color: rgb(8, 8, 8);
    opacity: 0.7;
    position: absolute;
    top: 0;
    display: block;
    left: 0;
    width: 100%;
    height: 115%;
  }
  .show-blog {
    position: absolute;
    width: 67%;
    top: 178px;
    left: 15%;
    border-radius: 15px;
    background-color: rgb(30, 30, 30);
    padding: 15px 30px;
  }
  .show-blog p:first-child {
    text-align: center;
    color: greenyellow;
    font-size: 35px;
    margin-top: 40px;
  }
  .icon-top span {
    margin-right: 15px;
  }
  .title {
    font-size: 30px;
    font-weight: 600;
  }
  .close {
    top: -35px;
    right: -35px;
    background-color: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    font-size: 25px;
    text-align: center;
    line-height: 35px;
    color: #000;
  }
}
@media screen and (min-width: 992px) {
  .show-blog {
    width: 57%;
    left: 20%;
  }
}
@media screen and (min-width: 1200px) {
  .show-blog {
    width: 40%;
    left: 28%;
  }
}
</style>