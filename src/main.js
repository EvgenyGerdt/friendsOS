import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSpinner,
    faMessage,
    faCog,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faUserPlus,
    faBell,
    faCheck,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import App from './App.vue'
import router from './router'

library.add(
    faSpinner,
    faMessage,
    faCog,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faUserPlus,
    faBell,
    faCheck,
    faPaperPlane,
);

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
