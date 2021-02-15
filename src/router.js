import Vue from "vue";
import VueRouter from "vue-router";
import home from '@/components/home.vue'
//import adress from '@/components/adress.vue';
import basket from '@/components/basket.vue'
import payment from '@/components/payment.vue'


Vue.use(VueRouter);

const routes = [
    { path: "/", component: home, name: 'home' },
    { path: "/basket", component: basket, name: 'basket' },
    { path: "/payment", component: payment, name: 'payment' },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;