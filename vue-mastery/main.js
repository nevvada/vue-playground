const app = new Vue({
  el: '#app',
  data: {
    hreffy: 'https://google.com',
    image: './assets/greensocks.jpeg',
    product: 'Socks',
    targetty: '_blank',
    inventory: 11,
    onSale: true,
    details: [
      '80% cotton',
      '20% polyester',
      'Gender-neutral',
    ],
    inStock: true,
    variants: [
      {
        id: 2234,
        color: 'green',
        image: './assets/greensocks.jpeg',
      },
      {
        id: 2235,
        color: 'blue',
        image: './assets/bluesocks.jpeg',
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
    updateProduct(image) {
      this.image = image;
    }
  },
});