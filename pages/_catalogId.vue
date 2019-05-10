<template>
  <div id="page-catalog">
    <aside class="menu">
      <p class="menu-label">
        Category
      </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">Hair Treatment</a>
          <ul>
            <li>
              <a>Shampoo</a>
            </li>
            <li>
              <a>Conditioner</a>
            </li>
            <li>
              <a>Dyes</a>
            </li>
          </ul>
        </li>
      </ul>
      <p class="menu-label">
        Brand
      </p>
      <b-field>
        <b-input 
          placeholder="Search Brand"
          type="search"
          icon-pack="fas"
          icon="search"
        >
        </b-input>
      </b-field>
      <ul class="menu-list">
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
      </ul>
      <p class="menu-label">
        Price
      </p>
      <ul class="menu-list">
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
        <li class="list-item">
          <b-checkbox class="checkbox">Basic</b-checkbox>
        </li>
      </ul>
    </aside>
    <main>
      <h1 class="title is-1 page-title">{{ catalogName }}</h1>
      <div class="products">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6">Brand Name</p>
                <p class="title is-5">Product Name</p>
              </div>
            </div>

            <div class="content">
              <p class="title is-5">$20</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6">Brand Name</p>
                <p class="title is-5">Product Name</p>
              </div>
            </div>

            <div class="content">
              <p class="title is-5">$20</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="subtitle is-6">Brand Name</p>
                <p class="title is-5">Product Name</p>
              </div>
            </div>
            <div class="content">
              <p class="title is-5">$20</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  

  export default {
    async asyncData({ params }) {
      return { catalogName: params.catalogId }
    },
    data() {
      return {
        catalogId: '',
        catalogName: ''
      }
    },
    methods: {
      handleRating(e) {
        console.log('rated')
      }
    }
  }
</script>

<style scoped lang="scss">
  #page-catalog {
    display: flex;
    padding: 1em 0;
  }
  .menu {
    min-width: 300px;
    background: lightgrey;
    padding: 1em;
  }
  .menu-list:not(:first-of-type) {
    height: 200px;
    overflow-y: scroll;
  }
  main {
    flex: 1 1 auto;
  }
  .page-title {
    text-align: center;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    flex-basis: 30%;
    margin: 0.5em;
  }
</style>