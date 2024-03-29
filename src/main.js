import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {
    store
} from './store/store.js';
import {
    routes
} from './routes.js';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {

        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {
                selector: to.hash
            };
        }
    }
});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')