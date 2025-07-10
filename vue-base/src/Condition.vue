<script setup>
import { ref } from 'vue';

const isLogin = ref(false);
function handleLogin() {
    isLogin.value = true;
}

const status = ref('');

function handleClick(event) {
    const dataValue = event.target.getAttribute('data-value');
    status.value = parseInt(dataValue);
}
</script>

<template>
    <p v-if="isLogin">Mít test 1</p>
    <button v-else @click="handleLogin">
        Login
    </button>

    <div>
        <p v-if="status == 1">1</p>
        <p v-else-if="status == 2">2</p>
        <p v-else-if="status == 3">3</p>
        <p v-else>Choose a number</p>
        <div>
            <button @click="handleClick" data-value="1">Click 1</button>
            <button @click="handleClick" data-value="2">Click 2</button>
            <button @click="handleClick" data-value="3">Click 3</button>
        </div>
    </div>

    <div v-show="status">V-SHOWWWWWW</div>
</template>
