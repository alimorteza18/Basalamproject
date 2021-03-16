import Basket from '@/Basket.vue';
import AddressBasket from '@/components/AddressBasket.vue';
import Payment from '@/components/Payment.vue'


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