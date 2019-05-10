<template>
  <footer>
    <div class="menu">
      <div class="route-group" v-for="(r, routeIndex) of routes" :key="routeIndex">
        <h3 class="group-title">{{ r.displayName }}</h3>
        <ul>
          <li v-for="(c, childIndex) of r.children" :key="childIndex">
            <nuxt-link :to="c.to">
              {{ c.displayName }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <h3>&copy;2019 Company LTD. All rights reserved</h3>
    </div> 
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          {
            displayName: 'Customer Service',
            children: [
              {
                displayName: 'Orders',
                to: '#'
              }, {
                displayName: 'Contact Us',
                to: '#'
              }
            ]
          }, {
            displayName: 'About',
            children: [
              {
                displayName: 'Careers',
                to: '#'
              }, {
                displayName: 'Privacy Policy',
                to: '#'
              }, {
                displayName: 'Terms & Conditions',
                to: '#'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  footer {
    background: lightgrey;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    max-width: 1440px;
    margin: auto;
    color: black;
    padding: 1em;
  }
  .menu .route-group li {
    margin: 0.25em 0;
    font-size: 12pt;
  }
  .menu .group-title {
    font-weight: bold;
    font-size: 14pt;
  }
  .copyright {
    text-align: center;
    background: white;
    padding: 0.5em;
  }
</style>