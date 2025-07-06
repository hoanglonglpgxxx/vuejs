<script setup>
import { ref } from 'vue';

let msg = ref('');
let msg2 = ref('');

function handleInput(event) {
    msg.value = event.target.value;
}

</script>

<template>
    <h2>Two wway binding</h2>
    <div>
        <div>
            <label>Msg</label>
            <input @input="handleInput" type="text" name="message">
        </div>
        <div>
            <p>message: {{ msg }}</p>
        </div>
        <div>
            <label>Msg Model</label>
            <input type="text" name="msg2" v-model="msg2">
        </div>
        <div>
            <p>message: {{ msg2 }}</p>
        </div>
    </div>
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
