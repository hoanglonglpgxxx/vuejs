import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import TwoWayBinding from './TwoWayBinding.vue';
import ComputedAndWatchers from './ComputedAndWatchers.vue';
import Styling from './Styling.vue';
import Condition from './Condition.vue';
import ListRendering from './ListRendering.vue';

createApp(App).mount('#app');
createApp(TwoWayBinding).mount('#twoWayBinding');
createApp(ComputedAndWatchers).mount('#computedAndWatchers');
createApp(Styling).mount('#styling');
createApp(Condition).mount('#condition');
createApp(ListRendering).mount('#listRendering');
