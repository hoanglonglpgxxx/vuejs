import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
// import TwoWayBinding from './TwoWayBinding.vue';
import ComputedAndWatchers from './ComputedAndWatchers.vue';

createApp(App).mount('#app');
// createApp(TwoWayBinding).mount('#two-way');
createApp(ComputedAndWatchers).mount('#computed-and-watchers');
