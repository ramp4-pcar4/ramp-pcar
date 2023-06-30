import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import SamplePage from '@/views/SamplePage.vue';
import ExternalSamplePage from '@/views/ExternalSamplePage.vue';
import RampFooterV from '@/components/footer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/samples/:config',
        name: 'Samples',
        component: SamplePage,
        props: true
    },
    {
        path: '/external_samples/:config',
        name: 'External Samples',
        component: ExternalSamplePage,
        props: true
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
    }
});

export default router;
