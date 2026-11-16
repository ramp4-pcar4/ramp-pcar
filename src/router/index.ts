import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        // old sample/feature links (e.g. #/samples/datatypes) land back on the home page
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes
});

export default router;
