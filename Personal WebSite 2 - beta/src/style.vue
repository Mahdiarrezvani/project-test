<template>
  <span></span>
</template>

<script>
export default {
  name: "styleAll",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #040404;
}

.main {
  padding: 25px 25px 100px;
  color: white;
  text-transform: capitalize;
}

.title-main {
  text-transform: uppercase;
  color: greenyellow;
  font-size: 27px;
  font-weight: bold;
  position: relative;
  text-align: center;
  margin-bottom: 70px;
}

.title-main span {
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 6px;
  background-image: linear-gradient(
    -35deg,
    transparent 8%,
    greenyellow 8%,
    greenyellow 92%,
    transparent 92%,
    transparent 100%
  );
}

.title-main span::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: -10px;
  width: 12px;
  height: 100%;
  background-color: greenyellow;
  clip-path: polygon(65% 0, 100% 0, 33% 100%, 0 100%);
}

@media screen and (min-width: 768px) {
  .main {
    padding: 35px 100px 100px 30px !important;
  }
}
</style>