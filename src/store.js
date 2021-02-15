import Vue from "vue";
import Vuex from "vuex";
import customers from '@/json/customers.json'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(axios);

export const store = new Vuex.Store({
    state: {
        customers,
        sum: 0,
        vendors: {},
        number: 0
    },
    getters: {
        getTotalVendor: (state) => (index) => {
            let vendor;
            vendor = state.vendors.find((vendor) => vendor.id == index);
            return vendor.totalprice;
        },
        getTotalSum: (state) => {
            let sum = 0;
            state.vendors.forEach((vendor) => sum += vendor.totalprice);
            return sum;
        },
    },
    mutations: {
        setData: function(state, data) {
            state.vendors = data.vendors;
        },
        totalVendor: (state) => {
            state.number = 0;
            state.vendors.forEach((vendor) => {
                vendor.totalprice = 0
                vendor.products.forEach(product => {
                    vendor.totalprice += product.price * product.counter;
                    state.number++;
                })
            })
        },
        removeProduct: (state, id) => {
            let i, j;
            state.vendors.forEach((vendor) => {
                i = vendor.products.find((product) => product == id);
                if (i) {
                    j = vendor.products.findIndex((product) => product == id);
                    vendor.products.splice(j, 1);
                }
                state.vendors = state.vendors.filter((vendor) => {
                    return vendor.products.length > 0;
                })
            })
        },
        crement: (state, args) => {
            state.vendors.forEach((vendor) => {
                vendor.products.find((product) => {
                    if (product.id == args[1]) {
                        args[0] == true ? (product.counter > 1 ? product.counter-- : "") : productChecker();
                        state.sum += 100;
                    }

                    function productChecker() {
                        if (product.counter < product.stock)
                            product.counter++;
                    }
                });
            });
        },

        radioChecker: (state, id) => {
            state.customers.forEach((customer) => {
                if (customer.id == id)
                    customer.selected = true;
                else
                    customer.selected = false;
            });
        },
    },
    actions: {
        async setData({
            commit
        }, data) {
            data.vendors.forEach((vendor) => {
                vendor.totalprice = 0
                vendor.products.forEach((product) => {
                    product.counter = 1;
                })
            })
            commit('setData', data)
        },
        removeProduct({
            commit
        }, id) {
            commit('removeProduct', id);
            commit('totalVendor');
        },
        crement({
            commit,
        }, args, ) {
            commit('crement', args);
            commit('totalVendor');

        },
        totalVendor({
            commit
        }) {
            commit('totalVendor');
        },
    },
});