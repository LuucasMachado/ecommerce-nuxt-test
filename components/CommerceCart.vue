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
  @media screen and (max-width: 1393px) {
    width: 15%;
    margin-left: 20px;
  }
  @media screen and (max-width: 675px) {
    width: 80%;
    margin-top: 20px;
  }
  border: 1px solid #E1E1E1;
  padding: 20px;
  height: min-content;

}

.empty-products {
  height: 70%;
}

</style>