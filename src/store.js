import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['cart']
    })],
    state: {
        cart: [],
    },
    mutations: {
        addToCart: (state, item) => state.cart.push(item),
    },
    getters: {
        getCart: (state) => {
            return state.cart;
        }
    }
})
export default store;