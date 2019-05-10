<template>
  <b-collapse :open="false" aria-id="cart-dropdown">
    <b-button aria-controls="cart-dropdown" icon-pack="fas" icon-left="shopping-bag" slot="trigger"></b-button>
    <div class="notification">
      <h1 class="title">Your Bag</h1>
      <div class="line-item" v-for="i of lineItems" :key="i.id" :title="i.name">
        <b-button @click="removeLineItem" class="btn-close" icon-pack="fas" size="is-small" icon-left="times"></b-button>
        <div class="body">
          <div class="description">
            <img :src="i.imageUrl" />
            <p>SKU: {{ i.sku }}</p>
          </div>
          <b-field class="input-quantity">
            <b-numberinput controls-position="compact" v-model="i.quantity" size="is-small"></b-numberinput>
          </b-field>
          <div class="price-details">
            <p class="list-price">${{ i.listPrice }}</p>
          </div>
        </div>
      </div>
      <div class="subtotal">
        <p class="label">Subtotal<p>
        <p>${{ subtotal }}</p>
      </div>
      <b-button type="is-primary" class="btn-checkout">
        Checkout
      </b-button>
    </div>
  </b-collapse>
</template>

<script>
  export default {
    data() {
      return {
        cart: {
          lineItems: [
            {
              physicalItems: [
                {
                  id: '0',
                  imageUrl: 'https://via.placeholder.com/150x100',
                  name: 'Regular Fit Striped Polo',
                  listPrice: 0,
                  sku: '1111',
                  quantity: 1
                }, {
                  id: '1',
                  imageUrl: 'https://via.placeholder.com/150x100',
                  name: 'Regular Fit Striped Cargo Shorts',
                  listPrice: 0,
                  sku: '1112',
                  quantity: 1
                }, {
                  id: '2',
                  imageUrl: 'https://via.placeholder.com/150x100',
                  name: '4RN/47R Light Red Neutral Brown LiquiColor Permanent Hair Color',
                  listPrice: 0,
                  sku: '1113',
                  quantity: 1
                }, {
                  id: '3',
                  imageUrl: 'https://via.placeholder.com/150x100',
                  name: '2RN/5R Light Blonde Neutral Brown LiquiColor Permanent Hair Color',
                  listPrice: 0,
                  sku: '1114',
                  quantity: 1
                }
              ]
            }
          ]
        }
      }
    },
    computed: {
      physicalItems() {
        return this.cart.lineItems.reduce((acc, curr) => acc.concat(curr['physicalItems']), [])
      },
      lineItems() {
        return this.physicalItems
      },
      subtotal() {
        return this.lineItems.reduce((acc, curr) => (acc + curr.listPrice), 0)
      },
      total() {
        return this.subtotal;
      }
    },
    methods: {
      removeLineItem(e) {
        console.log('removed item')
      }
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    position: absolute;
    width: 350px;
    right: calc(100% - 50px);
    padding: 0;
  }
  .title {
    font-size: 18pt;
    padding: 0.5em;
    margin: 0;
  }
  .line-item {
    position: relative;
    display: flex;
    flex-direction: column;
    border-top: 1px solid lightgrey;
  }
  .line-item .btn-close {
    width: 2.25em;
    margin-left: auto;
    margin-right: 1em;
    margin: 1em 1em 0 auto;
  }
  .line-item .body {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5em 0;
  }
  .line-item .body .description {
    display: flex;
    font-size: 10pt;
    font-weight: bold;
  } 
  .line-item .body img {
    max-height: unset;
    object-fit: contain;
    margin-right: 1em;
  }
  .b-numberinput.field {
    flex-direction: column-reverse;
  }
  .line-item .input-quantity {
    width: 27px;
  }
  .line-item .list-price {
    font-weight: bold;
  }
  .subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    border-top: 1px solid lightgrey;
  }
  .btn-checkout {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>