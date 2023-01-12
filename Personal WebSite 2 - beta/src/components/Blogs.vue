<template>
  <router-view />
  <div class="main">
    <p class="title-main"><span></span>blog</p>
    <div class="blogs">
      <div class="blog" v-for="(blog, index) in blogs" :key="index">
        <router-link :to="'/blogs/' + index">
          <img :src="blog.image" />
        </router-link>
        <p class="title">{{ blog.title }}</p>
        <p class="text">{{ blog.text }}</p>
        <div>
          <span class="person"
            ><i class="fa-solid fa-user"></i>{{ blog.person }}</span
          >
          <i class="fa-sharp fa-solid fa-calendar"></i>
          <span class="date">{{ blog.date }}</span>
          <span class="work"
            ><i class="fa-solid fa-user"></i>{{ blog.work }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogs } from "../mixins.js";
export default {
  name: "MyBlog",
  setup() {
    return { blogs };
  },
};
</script>

<style scoped>
.title-main span {
  width: 70px;
}
.blog img {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  margin-top: 35px;
}
.title {
  margin: 7px 0;
  font-size: 20px;
}
.text {
  color: #777;
  margin-bottom: 15px;
}
.blog span {
  margin-right: 15px;
  font-size: 15px;
}
i {
  color: greenyellow;
  margin-right: 9px;
}
@media screen and (min-width: 576px) {
  .main {
    padding: 25px 100px;
  }
}
@media screen and (min-width: 768px) {
  .main {
    padding: 25px;
  }
  .title-main {
    text-align: start;
    margin-bottom: 50px;
  }
  .blog {
    width: 45.5%;
    display: inline-block;
    margin: 0 14px;
  }
}
@media screen and (min-width: 1200px) {
  .blog {
    width: 30.8%;
    display: inline-block;
    margin: 0 13px;
  }
}
</style>