import Vue from "vue";
import Vuex from "vuex";
import data from "./json/mydata.json";

Vue.use(Vuex);
console.clear();

const store = new Vuex.Store({
    state: {
        cart: data,
    },

    getters: {
        getCart(state) {
            return state.cart.filter(function(vendor) {
                return vendor.products.length > 0;
            });
        },
    },
    mutations: {
        removeProductFromCart(state, id) {
            state.cart.forEach((vendor) => {
                let find = vendor.products.findIndex(function(product) {
                    return product.id == id;
                });
                if (find >= 0) {
                    vendor.products.splice(find, 1);
                }
            });
        },
        increment(state, id) {
            let product;
            state.cart.forEach((vendor) => {
                product = vendor.products.find(function(product) {
                    return product.id == id;
                });
                if (product) {
                    product.counter++;

                }
            });
        },
        decrement(state, id) {
            let product;
            state.cart.forEach((vendor) => {
                product = vendor.products.find(function(product) {
                    return product.id == id;
                });
                if (product) {
                    product.counter--;
                    product.counter < 0 ? (product.counter = 0) : product.counter;
                }
            });
        },
    },

    actions: {
        removeProduct(context, id) {
            context.commit("removeProductFromCart", id);
        },
        increment(contex, id) {
            contex.commit("increment", id);
        },
        decrement(context, id) {
            context.commit("decrement", id);
        },

    },
});

export default store;