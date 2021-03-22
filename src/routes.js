import Basket from '@/Basket.vue';
var AddressBasket = resolve => {
    require.ensure(['@/components/AddressBasket.vue'], () => {
        resolve(require('@/components/AddressBasket.vue'));
    });
};

var Payment = resolve => {
    require.ensure(['@/components/Payment.vue'], () => {
        resolve(require('@/components/Payment.vue'));
    });
};


export const routes = [{
        name: 'Root',
        path: '/',
        component: Basket,
    },
    {
        name: 'AddressBasket',
        path: '/addressbasket',
        component: AddressBasket,
    },
    {
        name: 'Payment',
        path: '/payment',
        component: Payment,
    }
];