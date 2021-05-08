import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    cart: [],
  },

  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    }
  },

  getters: {
    categories: state => {
      return state.categories
    },
  },

  actions: {
    addToCart() {
      axios.post('/api/cart', [])
        .catch(console.error);
    },

    getCategories({ commit }) {
      axios.get('/api/ecommerce')
        .then(res => commit('updateCategories', res.data))
        .catch(console.error)
    }
  },
});
