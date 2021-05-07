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
    updateCategories(_, categories) {
      this.categories = categories;
    }
  },

  actions: {
    addToCart() {
      axios.post('/api/cart', [])
        .then(res => console.log('sposf', res.data))
        .catch(console.error);
    },
    getCategories({ commit }) {
      axios.get('/api/ecommerce')
        .then(res => commit('updateCategories', res.data))
        .catch(console.error)
    }
  },
});
