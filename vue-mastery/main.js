const app = new Vue({
  el: '#app',
  data: {
    hreffy: 'https://google.com',
    image: './assets/greensocks.jpeg',
    product: 'Socks',
    targetty: '_blank',
    inventory: 11,
    inStock: false,
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
      },
      {
        id: 2235,
        color: 'blue',
      }
    ],
    sizes: [
      'S',
      'M',
      'L',
    ]
  },
});