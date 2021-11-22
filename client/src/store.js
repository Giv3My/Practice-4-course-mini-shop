import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['cart', 'orders', 'isOpen']
    })],

    state: {
        cart: [],
        orders: [],
        isOpen: false,
    },

    mutations: {
        addToCart: (state, item) => state.cart.push(item),

        addToOrder: (state, order) => state.orders.push(order),

        setOrders: (state, orders) => state.orders = orders,

        deleteOrder: (state, id) => state.orders = state.orders.filter(order => order._id != id),

        toggleCart: (state) => state.isOpen = state.isOpen ? false : true,

        clearCart: (state) => state.cart = [],

        incAmount: (state, id) => ++(state.cart.find(item => item._id === id).amount),

        decAmount: (state, id) => {
            const item = (state.cart.find(item => item._id === id));
            if (item.amount > 1) --item.amount;
        },
    },

    getters: {
        getCart: (state) => {
            return state.cart;
        },

        getOrders: function (state) {
            return state.orders;
        },

        getTotalPrice: function (state) {
            return state.cart.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2);
        },

        getToggleCart: function (state) {
            return state.isOpen;
        }
    }
})
export default store;