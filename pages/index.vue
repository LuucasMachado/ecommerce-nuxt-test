<template>
  <div class="p-35 content-main">
    <ProductList :products="products" />
    <ShoppingCart :cart="cart" />
  </div>
</template>

<script>
import ProductList from '~/components/CommerceList';
import ShoppingCart from '~/components/CommerceCart';
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    ProductList,
    ShoppingCart
  },
  computed: {
    ...mapState({ products: 'products', cart: 'cart' })
  },
  watch: {
    ...mapGetters({ cart: 'cart' })
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Open Sans';
    margin: 35px;
  }
  .content-main {
    justify-content: space-around;
    display: flex;
    @media screen and (max-width: 675px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .d-flex {
    display: flex;
  }
  .p-35 {
    padding: 35px;
  }
</style>