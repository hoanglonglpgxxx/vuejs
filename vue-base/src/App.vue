<script setup>
import logo from './assets/logo.svg';
const imgUrl = logo;
import { ref } from 'vue';

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
    return `Xỉu ${counter}`;
  }
}
const count = ref(0);
function increasement() {
  count.value++;
}
const testHTML = `<div>Test apply html</div>`;

function handleSubmit(el = '', event) {
  console.log(el, event);
}

</script>

<template>
  <header>
    <img v-if="shouldShowImage" alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <section id="bind-attribute">
    <h1>{{ count }}</h1>
    <button @click="increasement">Add</button>

    <div>
      Tài hay Xỉu: {{ renderTaiXiu() }}
    </div>
    <div v-html="testHTML"></div>

    <form @submit.stop.prevent="handleSubmit(this, $event)" style="margin-top: 20px;">
      <button type="submit">Submit form</button>
    </form>
  </section>
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
