import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
// import TwoWayBinding from './TwoWayBinding.vue';
// import ComputedAndWatchers from './ComputedAndWatchers.vue';
// import Styling from './Styling.vue';
import Condition from './Condition.vue';

createApp(App).mount('#app');
// createApp(TwoWayBinding).mount('#element');
// createApp(ComputedAndWatchers).mount('#element');
createApp(Condition).mount('#working-element');
