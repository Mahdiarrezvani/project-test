<template>
  <div class="main">
    <div class="left">
      <img src="" />
    </div>
    <div class="right">
      <img src="" alt="" class="image-mobile" />
      <div class="container-texts">
        <p class="full-name color-text">
          <span class="border"></span>i'm mahdiar rezvani
        </p>
        <p class="work">web developer</p>
        <p class="discription">
          Hi! My name is <span class="color-text">Mahdiar Rezvani</span>. I am
          Developer, and I'm very passionate and dedicated to my work. With 18
          years experience as a professional Web Developer, i have acquired
          skils and knowledge necessary to make your project a success.
        </p>
        <div class="container-download">
          <button class="download">Download CV</button>
        </div>
        <p class="working-me">
          Are you interested working with me?
          <a href="#">Let's started now</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTo",
};
</script>

<style scoped>
.main {
  height: 100vh;
  padding: 0 !important;
}
.color-text {
  color: greenyellow;
}
.left {
  display: none;
}
.image-mobile {
  display: block;
  margin: auto;
  width: 200px;
  height: 200px;
  background-color: greenyellow;
  border-radius: 50%;
  margin-bottom: 30px;
}
.container-texts {
  text-align: center;
  margin: 0 35px;
}
.full-name {
  font-size: 25px;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
}
.border {
  position: absolute;
  width: 280px;
  height: 6px;
  bottom: -10px;
  background-image: linear-gradient(
    -35deg,
    transparent 4%,
    greenyellow 4%,
    greenyellow 96%,
    transparent 96%,
    transparent 100%
  );
}
.border::after {
  content: "";
  position: absolute;
  width: 11px;
  height: 100%;
  right: -5px;
  background-image: linear-gradient(
    -35deg,
    transparent 35%,
    greenyellow 35%,
    greenyellow 65%,
    transparent 65%,
    transparent 100%
  );
}
.work {
  margin: 30px 0 40px;
  font-size: 24px;
  font-weight: bold;
}
.discription {
  font-size: 18px;
  color: #888;
}
.download {
  background-image: linear-gradient(
    -65deg,
    transparent 12%,
    greenyellow 12%,
    greenyellow 88%,
    transparent 88%,
    transparent 100%
  );
  margin: 40px 0 60px;
  font-size: 17px;
  padding: 15px 60px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
}
.download::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 110%;
  background-color: greenyellow;
  transform: rotate(25deg);
  right: 2px;
  border-radius: 10px;
  top: 0;
}
.working-me {
  font-size: 17px;
}
.working-me a {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  display: block;
  text-decoration: none;
  color: greenyellow;
}
@media screen and (min-width: 768px) {
  .main {
    padding-top: 50px !important;
  }
  .container-texts {
    text-align: center;
    margin: 0 150px;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    display: flex;
    padding-top: 0 !important;
  }
  .left {
    display: block;
    width: 45%;
    height: 100%;
    background-image: linear-gradient(
      81deg,
      transparent 0,
      greenyellow 0,
      greenyellow 70%,
      rgba(172, 255, 47, 0.6) 70%,
      rgba(172, 255, 47, 0.6) 75.5%,
      rgba(172, 255, 47, 0.4) 75.5%,
      rgba(172, 255, 47, 0.4) 80.5%,
      transparent 80.5%,
      transparent 100%
    );
  }
  .right {
    width: 55%;
    display: block;
  }
  .image-mobile {
    display: none;
  }
  .container-texts {
    margin: 0;
    margin-top: 80px;
    margin-right: 370px;
    text-align: start;
  }
  .full-name {
    font-size: 30px;
  }
  .work {
    font-size: 26px;
  }
  .download {
    padding: 13px 50px;
  }
  .working-me {
    position: absolute;
    bottom: 180px;
  }
  .working-me a {
    font-size: 17px;
    display: inline-block;
  }
}
</style>