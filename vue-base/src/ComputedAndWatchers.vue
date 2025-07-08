<script setup>
import { ref, watch } from 'vue';
import { computed } from 'vue';

let fName = ref('Nè');
let lName = ref('Mít');

//Hàm này bị re-render khi có event, không tối ưu performance
/* function getFullName() {
    return lName.value + " " + fName.value;
} */

const changeName = (() => {
    fName.value = 'test';
});

const fullName = computed(() => {
    return lName.value + ' ' + fName.value;
});

watch(fName, (newVal, oldVal) => {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
});
</script>

<template>
    <h2>Computed and watchers</h2>
    <p>Họ và tên : {{ fullName }}</p>
    <button @click="changeName()">Change name</button>
    <div>
        <div>
            <label>Msg</label>
        </div>
    </div>
</template>
