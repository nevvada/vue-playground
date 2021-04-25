const app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    hreffy: 'https://google.com',
    selectedVariant: 0,
    product: 'Socks',
    targetty: '_blank',
    selectedVariant: 0,
    inventory: 11,
    onSale: true,
    details: [
      '80% cotton',
      '20% polyester',
      'Gender-neutral',
    ],
    variants: [
      {
        id: 2234,
        color: 'green',
        image: './assets/greensocks.jpeg',
        quantity: 50,
      },
      {
        id: 2235,
        color: 'blue',
        image: './assets/bluesocks.jpeg',
        quantity: 0,
      }
    ],
    sizes: [
      'S',
      'M',
      'L',
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    printBrandAndProduct() {
      if (this.onSale) {
        return `${this.brand} ${this.product}`
      }
    }
  },
});