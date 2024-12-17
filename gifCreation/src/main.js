import Vue from "vue";
import App from "./App.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const innerdemo = document.getElementById("inner-demo-2");

const stringSplitter = string => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(innerdemo, {
  loop: true,
  delay: 45,
  deleteSpeed: 20,
  stringSplitter,
  cursor: '|',
  cursorClassName: 'custom-cursor'
});

typewriter
  .pauseFor(1000)
  .typeString("Hi, I'm Paul 👋")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a ")
  .typeString("Software Developer 💻")
  .pauseFor(1000)
  .deleteChars(21)
  .typeString("n Athlete 💪")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString(" Lifelong Learner 📚")
  .pauseFor(1000)
  .deleteChars(18)

  .start();
  // .typeString(" Machine Learning Engineer 🤖")
  // .pauseFor(1000)
  // .deleteChars(27)
  // .typeString("Data Scientist 📊")
  // .pauseFor(1000)
  // .deleteAll()