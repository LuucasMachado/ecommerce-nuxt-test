<template>
  <div :class="`shopping-cart ${bodyClass}`">
    <div class="shopping-cart-body">
      <CommerceCartList v-if="cart.length" :cart="cart" />
      <CommerceCartEmpty v-else />
    </div>
  </div>
</template>

<script>
import CommerceCartEmpty from './CommerceCartEmpty'
import CommerceCartList from './CommerceCartList'

export default {
  name: 'CartView',
  props: {
    cart: [],
  },
  computed: {
    bodyClass() {
      return this.cart.length ? "with-products" : "empty-products";
    }
  },
}
</script>

<style lang="scss">
.d-flex {
  display: flex;
}

.shopping-cart {
  width: 20%;
  border: 1px solid #E1E1E1;
  padding: 20px;
  height: min-content;

}

.empty-products {
  height: 70%;
}

.shopping-cart-body {}
</style>