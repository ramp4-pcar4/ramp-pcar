import Vue from 'vue';
import App from './App.vue';
import '@/styles/main.css';
import 'glider-js/glider.min.css';

import { i18n } from '@/lang';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useToast from 'vue-toastification';

library.add(faGithub);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(useToast);

new Vue({
    el: '#app',
    i18n,
    router,
    render: (h) => h(App)
});
