<template>
  <div id="app">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'

  export default {
    components: {
      'navbar': Navbar
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
