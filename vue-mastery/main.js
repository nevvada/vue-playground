const eventBus = new Vue({

})

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
      eventBus.$emit('add-to-cart', id);
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
      reviews: [],
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

    <product-tabs :reviews="reviews"></product-tabs>
  </div>

  <a :href="hreffy" :target="targetty">
    Google
  </a>

  </div>
  `,
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  },
});

Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  template: `
  <div>
    <div>
      <span
        class="tab"
        v-for="(tab, index) in tabs"
        :class="tab === selectedTab && 'activeTab'"
        @click="selectedTab = tab"
        :key="index"
      >
        {{ tab }}
      </span>
    </div>

  <div v-show="selectedTab === 'Reviews'">
  <p v-if="!reviews.length">There are no reviews yet</p>
  <ul v-else>
    <li v-for="review in reviews">
      <p>{{ review.name }}</p>
      <p>Review: {{ review.review }}</p>
      <p>Rating: {{ review.rating }}</p>
      <p>Recommend to a friend?: {{ review.recommend }}</p>
    </li>
  </ul>
  </div>

  <product-review v-show="selectedTab === 'Add a Review'"></product-review>

  </div>

  `,
  data() {
    return {
      tabs: ['Reviews', 'Add a Review'],
      selectedTab: 'Reviews'
    }
  }
})

Vue.component('product-review', {
  template: `
    <form @submit.prevent="submitReview">

      <ul>
        <li v-if="errors.length" v-for="error in errors">{{ error }}</li>
      </ul>

      <p>
        <label for="name">Name: </label>
        <input type="text" v-model="name">
      </p>

      <p>
        <label for="review">Review: </label>
        <textarea id="review" v-model="review" />
      </p>

      <p>
        <label for="rating">Rating: </label>
        <select id="rating" name="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <p>Would you recommend to a frend?</p>
        <label for="yes">Yes</label>
        <input type="radio" value="yes" id="yes" name="recommend" v-model="recommend">

        <label for="no">No</label>
        <input type="radio" value="no" id="no" name="recommend" v-model="recommend">
      </p>

      <input type="submit" value="Submit Review">

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: [],
    }
  },
  methods: {
    submitReview() {
      this.resetErrors();

      if (this.review && this.rating && this.name && this.recommend) {
        const formattedReview = {
          review: this.review,
          rating: this.rating,
          name: this.name,
          recommend: this.recommend,
        };

        this.reviews.push(formattedReview);
        this.resetReview();
      } else {
        if (!this.review) this.errors.push('Missing Review');
        if (!this.rating) this.errors.push('Missing Rating');
        if (!this.name) this.errors.push('Missing Name');
        if (!this.recommend) this.errors.push('Missing Recommendation');
      }
    },
    resetReview() {
      this.name = null;
      this.rating = null;
      this.review = null;
      this.recommend = null;
    },
    resetErrors() {
      this.errors = [];
    }
  }
})

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
