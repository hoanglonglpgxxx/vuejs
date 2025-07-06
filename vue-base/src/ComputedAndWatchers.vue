<script setup>
import { ref } from 'vue';
import { computed } from 'vue';

let fName = ref('Nè');
let lName = ref('Mít');

//Hàm này bị re-render khi có event, không tối ưu performance
function getFullName() {
    return lName.value + " " + fName.value;
}

const fullName = computed(() => {
    console.log(12312);

    return lName.value + ' ' + fName.value;
});
</script>

<template>
    <h2>Computed and watchers</h2>
    <p>Họ và tên : {{ fullName }}</p>
    <div>
        <div>
            <label>Msg</label>
        </div>
    </div>
</template>
