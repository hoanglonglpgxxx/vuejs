<script setup>
import { reactive, ref } from 'vue';
const textColor = 'red';
const bgColor = 'cyan';
const fontSize = 2;
const active = ref(false);
const btnStyle = reactive({
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
});
const baseStyle = {
    fontSize: '1rem'
};
function handleStyle() {
    active.value = !active.value;
}
</script>

<template>
    <h2 :style="{ color: textColor, background: bgColor, fontSize: fontSize + 'rem' }">Computed and watchers</h2>
    <button :class="{ 'active-btn': active }" :style="[btnStyle, baseStyle]" @click="handleStyle()">Change name</button>
</template>
<style>
.active-btn {
    color: red !important
}
</style>