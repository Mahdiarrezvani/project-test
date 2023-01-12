<template>
  <div class="main">
    <div class="about">
      <p class="title-main"><span></span>about</p>
      <div class="container-info">
        <p class="label" v-for="(info, index) in informationes" :key="index">
          <span v-html="info.icon" class="icon"></span>
          {{ info.label }}:<span class="info">{{ info.info }}</span>
        </p>
      </div>
      <div class="components">
        <div
          class="component"
          v-for="(component, index) in components"
          :key="index"
        >
          <p class="component-icon"><i v-html="component.icon"></i></p>
          <p class="number">{{ component.number }}</p>
          <p class="text">{{ component.text }}</p>
        </div>
      </div>
    </div>
    <div class="title">my skills</div>
    <p class="border"></p>
    <div class="my-skills ml">
      <div class="component-skills">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <label>{{ skill.label }}</label>
          <div>
            <span class="show-percentage"
              ><span :style="`transform: translate(-${skill.range}%)`"></span
            ></span>
            <span class="percentage">{{ skill.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="title">experince & education</div>
    <p class="border"></p>
    <div class="container-education ml">
      <div class="component-education">
        <div
          class="education"
          v-for="(education, index) in educations"
          :key="index"
        >
          <span
            ><i>{{ education.icon }}</i></span
          >
          <span class="border-column"></span>
          <div class="container-texts">
            <p class="title-education">{{ education.title }}</p>
            <p class="text-education">{{ education.text }}</p>
            <span>{{ education.btn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "AboutMe",
  setup() {
    let informationes = [
      {
        label: "birthday",
        icon: `<i class="fa-sharp fa-solid fa-gift"></i>`,
        info: "00 , 00 , 0000",
      },
      {
        label: "age",
        icon: `<i class="fa-sharp fa-solid fa-calendar"></i>`,
        info: "20",
      },
      {
        label: "location",
        icon: '<i class="fa-solid fa-location-dot"></i>',
        info: "44 place, pisno,USA",
      },
      {
        label: "interests",
        icon: `<i class="fa-sharp fa-solid fa-gamepad"></i>`,
        info: "playstation, reading",
      },
      {
        label: "study",
        icon: `<i class="fa-sharp fa-solid fa-book"></i>`,
        info: "univercity of chicago",
      },
      {
        label: "degree",
        icon: `<i class="fa-sharp fa-solid fa-graduation-cap"></i>`,
        info: "master",
      },
      {
        label: "mail",
        icon: '<i class="fa-solid fa-at"></i>',
        info: "example@gmail.com",
      },
      {
        label: "phone",
        icon: '<i class="fa-solid fa-phone"></i>',
        info: "+77 022 177 05 05",
      },
    ];
    let components = [
      {
        icon: '<i class="fa-solid fa-heart"></i>',
        number: "555",
        text: "happy clients",
      },
      {
        icon: '<i class="fa-solid fa-chart-column"></i>',
        number: "222",
        text: "projects finished",
      },
      {
        icon: '<i class="fa-solid fa-arrow-down"></i>',
        number: "444",
        text: "fils downlaoded",
      },
      {
        icon: '<i class="fa-solid fa-code"></i>',
        number: "777",
        text: "lines of code",
      },
    ];
    let skills = [
      { label: "javascript", percentage: 75, range: "" },
      { label: "html", percentage: 60, range: "" },
      { label: "css", percentage: 88, range: "" },
      { label: "php", percentage: 65, range: "" },
      { label: "wordpress", percentage: 44, range: "" },
      { label: "reacct", percentage: 25, range: "" },
    ];
    let educations = [
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
      {
        title: "web developer - envato",
        text: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.",
        icon: "< >",
        btn: "2018-present",
      },
    ];
    skills.forEach(function (skill) {
      skill.range = 100 - skill.percentage;
    });
    return { informationes, components, educations, skills };
  },
};
</script>

<style scoped>
.title-main span {
  width: 100px;
}
.label {
  font-size: 17px;
  margin-top: 30px;
}
.info {
  color: #777;
  margin-left: 10px;
}
.components {
  margin: 50px 0;
  display: grid;
  grid-template-rows: repeat(1fr, 3);
}
.component {
  margin: 40px;
  text-align: center;
  font-size: 27px;
}
.component:nth-child(even) {
  grid-row: 2/3;
}
.component-icon {
  font-size: 30px;
}
.number {
  color: greenyellow;
  margin: 7px 0;
}
.text {
  font-size: 22px;
}
.title {
  background-color: #040404;
  display: inline-block;
  font-size: 25px;
  margin-left: 25px;
  z-index: 1;
  transform: translateY(14px);
  padding: 0 15px;
}
.border {
  margin-bottom: 40px;
  height: 1px;
  width: 98%;
  background-color: #333;
}
.skill {
  margin: 30px 0;
  text-transform: uppercase;
}
.skill div {
  display: flex;
  margin: 15px 30px 0 0;
}
.show-percentage {
  display: flex;
  margin-right: 12px;
  width: 100%;
  height: 13px;
  border-radius: 5px;
  background-color: #222;
  overflow: hidden;
}
.show-percentage span {
  content: "";
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: greenyellow;
}
.education {
  margin: 50px 0;
  display: flex;
}
.education i {
  display: inline-block;
  text-align: center;
  line-height: 47px;
  height: 47px;
  width: 47px;
  background-color: greenyellow;
  border-radius: 50%;
  font-size: 23px;
  color: black;
  font-weight: bold;
}
.border-column {
  width: 2px;
  height: 130px;
  transform: translate(-24px, 47px);
  background-color: #333;
}
.container-texts {
  margin: 10px 0 0 12px;
}
.title-education {
  font-size: 23px;
  font-weight: bold;
}
.text-education {
  margin: 15px 0 27px;
  color: #777;
}
.container-texts span {
  background-color: #222;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #888;
  font-size: 14px;
  border-radius: 7px;
}
/* @media screen and (min-width: 576px) {} */
@media screen and (min-width: 768px) {
  .title-main {
    text-align: start;
    margin-bottom: 50px;
  }
  .container-info {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .label {
    font-size: 18px;
    margin-top: 23px;
  }
  .label:nth-child(even) {
    grid-column: 2/3;
  }
  .components {
    display: flex;
    justify-content: space-around;
  }
  .component-icon {
    font-size: 37px;
  }
  .component-skills {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .skill:nth-child(even) {
    grid-column: 2/3;
    margin-right: 0;
  }
  .skill {
    margin-right: 70px;
  }
}
@media screen and (min-width: 992px) {
  .component-education {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .education:nth-child(even) {
    grid-column: 2/3;
    margin-left: 50px;
  }
  .education {
    margin: 50px 0;
  }
  .container-info {
    width: 70%;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    padding-right: 13%;
    padding: 70px 13% 0 30px;
  }
  .container-info {
    width: 60%;
  }
  .ml {
    margin-left: 50px;
  }
}
</style>