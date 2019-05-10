<template>
  <div id="app">
    <component-navbar />
    <nuxt />
    <component-footer />
  </div>
</template>

<script>
  import Footer from '~/components/Footer'
  import Navbar from '~/components/Navbar'

  export default {
    components: {
      'component-footer': Footer,
      'component-navbar': Navbar
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
