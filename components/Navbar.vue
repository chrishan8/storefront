<template>
  <div id="component-navbar">
    <nav class="navbar navbar-sub" role="navigation" aria-label="sub navigation">
      <div id="menu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <component-login-dropdown />
          </div>
          <div class="navbar-item">
            <component-cart-dropdown />
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="#">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </nuxt-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="menu" class="navbar-menu">
        <div class="navbar-center">
          <nuxt-link v-for="(r, index) of routes" :key="index" :to="r.to" class="navbar-item" :class="{ 'has-dropdown': r.children }">
            {{ r.title }}
            <div v-if="r.children" class="navbar-dropdown">
              <nuxt-link v-for="(c, index) of r.children" :key="index" :to="c.to" class="navbar-item">
                {{ c.title }}
              </nuxt-link>
            </div>
          </nuxt-link>
        </div>
        <div class="navbar-end">
          <b-field>
            <b-input 
              placeholder="Search..."
              type="search"
              icon-pack="fas"
              icon="search"
            >
            </b-input>
          </b-field>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import CartDropdown from '~/components/CartDropdown'
  import LoginDropdown from '~/components/LoginDropdown'

  export default {
    components: {
      'component-cart-dropdown': CartDropdown,
      'component-login-dropdown': LoginDropdown
    },
    data() {
      return {
        routes: [
          {
            to: '#',
            title: 'Hair'
          }, {
            to: '#',
            title: 'Nails'
          }, {
            to: '#',
            title: 'Beauty'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  #component-navbar {
    padding: 0 1em;
  }
  .navbar-center {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
  }
  .navbar-sub {
    z-index: 99;
  }
</style>