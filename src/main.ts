import Vue from 'vue';
import App from './App.vue';
import './styles/main.css';
import 'glider-js/glider.min.css';

import { i18n } from '@/lang';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import VueTippy, { TippyComponent } from 'vue-tippy';

Vue.use(VueTippy);
Vue.component('tippy', TippyComponent);

import useToast from 'vue-toastification';
Vue.use(useToast);

import VueFullScreen from 'vue-fullscreen';
Vue.use(VueFullScreen);

import StorylinesViewer, { storylinesI18n } from 'ramp-storylines';
Vue.use(StorylinesViewer);
import 'ramp-storylines/dist/storylines-viewer.css';
// merge storylines viewer translations with current i18n instance
i18n.mergeLocaleMessage('en', storylinesI18n.messages.en);
i18n.mergeLocaleMessage('fr', storylinesI18n.messages.fr);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    i18n,
    router,
    render: (h) => h(App)
});
