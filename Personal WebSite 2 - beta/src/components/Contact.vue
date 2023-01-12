<template>
  <div class="main">
    <div class="said-bar">
      <p class="title-main"><span></span>get in touch</p>
      <div class="">
        <p class="title">don't be shy !</p>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          corporis molestiae ex illo ullam. Doloribus dolores vitae inventore
          debitis deleniti iure, alias odio ut ratione laboriosam ipsam
          asperiores voluptatum perferendis incidunt provident esse maiores
          animi corporis dolore, quibusdam quaerat eum. Debitis sint quo
          consequatur amet natus magni aliquam iure corrupti!
        </p>
      </div>
      <div
        class="contactsMe"
        v-for="(contact, index) in contactsMe"
        :key="index"
      >
        <span class="icon-form"><i v-html="contact.icon"></i></span>
        <div>
          <span class="title-form">{{ contact.title }}</span>
          <span class="text-form">{{ contact.text }}</span>
        </div>
      </div>
    </div>
    <form action="#" class="form">
      <input type="text" class="name" placeholder="Name" />
      <input type="email" class="email" placeholder="Email" />
      <input type="text" class="subject" placeholder="Subject" />
      <input type="text" class="message" placeholder="Message" />
      <button class="submit">send message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FooterOne",
  setup() {
    let contactsMe = [
      {
        icon: '<i class="fa-solid fa-location-dot"></i>',
        title: "address point",
        text: "123 stree now york cite , unitrd states of america 750065",
      },
      {
        icon: '<i class="fa-solid fa-envelope"></i>',
        title: "mail me",
        text: "steve@gmail.con",
      },
      {
        icon: '<i class="fa-solid fa-phone"></i>',
        title: "call me",
        text: "+216 21 45 6555",
      },
    ];
    return { contactsMe };
  },
};
</script>
 
<style scoped>
.title-main span {
  width: 195px;
}
.title-main span::after {
  right: -2px;
}
.title {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
}
.description {
  margin: 20px 0;
  color: #555;
}
.contactsMe {
  display: flex;
  margin: 20px 0;
}
.contactsMe div span {
  display: block;
  margin-left: 13px;
}
.icon-form {
  color: greenyellow;
  font-size: 27px;
}
.title-form {
  font-size: 20px;
  text-transform: uppercase;
}
.text-form {
  margin-top: 7px;
  color: #555;
}
.form input {
  padding-left: 10px;
  color: rgb(150, 150, 150);
  font-size: 14px;
  width: 98%;
  background-color: rgb(20, 20, 20);
  border: none;
  border-radius: 7px;
  height: 50px;
  margin: 10px 0;
}
.message {
  padding-bottom: 100px;
}
.submit {
  background-image: linear-gradient(
    -67deg,
    transparent 12%,
    greenyellow 12%,
    greenyellow 88%,
    transparent 88%,
    transparent 100%
  );
  margin: 40px 0 60px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 12px 35px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  position: relative;
}
.submit::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 105%;
  background-color: greenyellow;
  transform: rotate(24deg);
  right: 3px;
  border-radius: 10px;
  top: 0;
}
@media screen and (min-width: 768px) {
  .name {
    width: 47% !important;
    display: inline-block;
  }
  .email {
    display: inline-block;
    width: 47% !important;
    margin-left: 2.5% !important;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    padding: 90px 50px 0 50px;
    height: 100.8%;
    display: flex;
  }
  .said-bar {
    width: 27%;
    margin-right: 50px;
  }
  .title-main {
    text-align: start;
  }
  .contactsMe {
    margin: 40px 0;
  }
  .icon-form {
    font-size: 33px;
  }
  .text-form {
    font-size: 19px;
  }
  .form {
    margin-top: 150px;
    width: 63%;
  }
  .form input {
    height: 60px;
  }
  .message {
    padding-bottom: 180px;
  }
  .submit {
    margin: 20px 0;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 40px;
    cursor: pointer;
  }
}
</style>