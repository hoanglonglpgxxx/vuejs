<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import logo from './assets/logo.svg';
const imgUrl = logo;
import { ref } from 'vue';

// Define reactive data using ref or reactive
const name = "mits";
const url = "https://tailieusharefree.blogspot.com/2024/06/khoa-hoc-vue3-tu-co-ban-toi-nang-cao.html";

const shouldShowImage = false;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getVal() {
  const arr = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
  const counter = arr.reduce((sum, curVal) => sum += curVal, 0);
  return counter;
}

function renderTaiXiu() {
  let counter = getVal();

  if (counter > 11) {
    return `Tài ${counter}`;
  } else {
    return 'Xỉu';
  }
}

const testHTML = `<div>Test apply html</div>`

</script>

<template>
  <header>
    <img v-if="shouldShowImage" alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>{{ name }}</h1>
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <section id="bind-attribute">
    <h1>{{ count }}</h1>
    <button @click="increasement">Add</button>

    <div>
      Tài hay Xỉu: {{ renderTaiXiu() }}
    </div>
    <div v-html="testHTML"></div>
  </section>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
