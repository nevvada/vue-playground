<template>
  <div>
    <div v-if="!loading">
      loading...
    </div>

    <ul v-if="loading">
      <li
        v-for="category in categories"
        :key="category"
        @click="pushRoute(category)"
      >
        {{ category }}
      </li>
    </ul>
    <!-- <button @click="addToCart()">add to cart</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ECommerceStore',

  created() {
    this.getCategories();
  },

  computed: {
    ...mapGetters(['categories']),

    loading() {
      return this.categories.length;
    }
  },

  methods: {
    ...mapActions(['getCategories', 'addToCart']),

    addToCart() {
      this.$store.dispatch('addToCart', {})
    },

    pushRoute(category) {
      this.$router.push(`/${category}`);
    },
  },
}
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>