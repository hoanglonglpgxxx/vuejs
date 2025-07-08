<script setup>
import { reactive, ref } from 'vue';

const isLogin = ref(false);
function handleLogin() {
    isLogin.value = true;
}
</script>

<template>
    <p v-if="isLogin">Mít test 1</p>
    <button v-else @click="handleLogin">
        Login
    </button>
</template>
