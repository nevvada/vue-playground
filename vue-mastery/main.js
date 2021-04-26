Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `<div>
    <div v-for="detail in this.details">{{ detail }}</div>
  </div>`,
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    addToCart(id) {
      this.$emit('add-to-cart', id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart');
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
    },
    shipping() {
      return this.premium ? 'Free Shipping' : '$2.99';
    },
  },
  data() {
    return {
      brand: 'Vue Mastery',
      hreffy: 'https://google.com',
      product: 'Socks',
      targetty: '_blank',
      selectedVariant: 0,
      inventory: 11,
      onSale: true,
      detailsString: 'DETAILSSSSS',
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
    }
  },
  template: `
  <div class="product">

  <div class="product-image">
    <img v-bind:src="image" alt="">
  </div>
  
  <div class="product-info">
    <h1>{{ title }}</h1>
    <p
      v-if="inventory > 10"
      :class="inStock ? '' : 'out-of-stock'"
    >
      In Stock
    </p>
    <p v-else-if="(inventory > 0) && (inventory <= 10)">Almost Out of Stock</p>
    <p v-else>Out of Stock</p>
    <p>{{ shipping }}</p>

    <span v-if="onSale">On Sale!</span>

    <ul>
      <li
        :key="variant.id"
        class="color-box"
        v-for="(variant, index) in variants"
        v-bind:style="{ backgroundColor: variant.color }"
        @mouseover="updateProduct(index)"
      >
      </li>
    </ul>

    <ul>
      <li
        :key="size"
        v-for="size in sizes"
      >
        {{ size }}
      </li>
    </ul>

    <product-details :details="details"></product-details>

    <button @click="addToCart(variants[selectedVariant].id)" :disabled="!inStock" :class="!inStock ? 'disabledButton' : ''">Add to Cart</button>

    <button @click="removeFromCart()">Remove from Cart</button>

    <p>{{ printBrandAndProduct }}</p>
  </div>

  <a :href="hreffy" :target="targetty">
    Google
  </a>

  </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    cart: [],
    premium: false,
  },
  methods: {
    addToGlobalCart(id) {
      this.cart.push(id)
    },
    removeFromGlobalCart() {
      this.cart = this.cart.slice(0, -1);
    },
  },
});
