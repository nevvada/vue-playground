<template>
  <div>
    ecommerce store
    <button @click="addToCart()">add to cart</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ECommerceStore',

  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions(['getCategories', 'addToCart']),

    addToCart() {
      this.$store.dispatch('addToCart', {})
    }
  }
}
</script>

<style>

</style>