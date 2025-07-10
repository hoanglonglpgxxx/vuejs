<script setup>
import { ref } from 'vue';
const itemsList = ref([
    {
        title: 'test 1',
        id: 'Q{lt'
    },
    {
        title: 'test 2',
        id: 'xcAh'
    },
    {
        title: 'test 3',
        id: 'S(qm'
    },
    {
        title: 'test 4',
        id: '(wtc'
    },
]);

</script>

<template>
    <p>List rendering</p>
    <div>
        <ul style="list-style: none;">
            <li v-for="(item, index) in itemsList" :data-value="item.id" :key="item.id">
                STT {{ index + 1 }} :
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>
