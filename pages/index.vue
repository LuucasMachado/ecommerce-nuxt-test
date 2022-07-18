<template>
  <div class="p-35 d-flex">
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
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
  .d-flex {
    display: flex;
    @media screen and (max-width: 480px) {
      display: block;
    }
  }
  .p-35 {
    padding: 35px;
  }
</style>