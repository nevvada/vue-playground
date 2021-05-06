<template>
  <div id="app">
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},
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

  body {
    background-attachment: fixed;
    background-image: linear-gradient(to bottom, #C6D8D3, #FDF0D5, #3A3335);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  #main {
    margin: 5em;
  }
</style>
