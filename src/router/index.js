import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/system',
        name: 'system',
        component: () => import(/* webpackChunkName: "system" */ '../views/SystemView.vue')
    },
    ,
    {
        path: '/services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
    },
    {
        path: '/support',
        name: 'support',
        component: () => import(/* webpackChunkName: "support" */ '../views/SupportView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    },
    {
        path: '/join',
        name: 'join',
        component: () => import(/* webpackChunkName: "join" */ '../views/JoinView.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;