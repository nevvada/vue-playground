<template>
  <div id="app">
    <main id="main">
      <nav>
        <ul class="navList">
          <li
            v-for="route in routes"
            :key="route.name"
          >
            <router-link :to="{
              name: route.name,
            }">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
}
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style-type: none;
  }

  body {
    background-attachment: fixed;
    background-image: linear-gradient(to bottom, #C6D8D3, #FDF0D5);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  #main {
    margin: 2em 5em;
  }

  .navList {
    display: flex;
    justify-content: space-around;
  }
</style>
