<template>
  <div>
    <div class="d-flex">
      <h2>Carrinho</h2>
      <p>({{ cart.length }} itens)</p>
    </div>
    <div v-for="product in cart">
      <div class="card" :key="product.id">
        <div class="card-box-img">
          <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="card-img">
        </div>
        <div class="m-10">
          <div class="card-title">
            {{ product.name }}
          </div>
          <div class="card-price">
            <span class="content-price">
              R$ {{ normalizePtValues(product.price) }}
            </span>
          </div>
        </div>
        <div class="btn-delete" @click="removeToCart(product)">
          X
        </div>
      </div>
    </div>
    <div class="cart-totals-content">
      <div class="total-line">
        <p class="total-labels">subtotal</p>
        <p class="total-labels-subtotal">R$ {{ normalizePtValues(subtotal) }}</p>
      </div>
      <div class="total-line">
        <p class="total-labels">frete</p>
        <p class="total-labels-frete">R$ {{ normalizePtValues(freteTotal) }}</p>
      </div>
      <div class="total-line">
        <p class="total-labels">total</p>
        <p class="total-labels-total">R$ {{ normalizePtValues(total) }}</p>
      </div>
    </div>
    <button class="btn-submit">Finalizar compra</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'CartView',
  props: {
    cart: [],
  },
  computed: {
    ...mapGetters({
      subtotal: 'cartSubtotal',
      freteTotal: 'cartFrete',
      total: 'cartTotal',
    }),

  },
  methods: {
    removeToCart(product) {
      this.$store.dispatch("removeProductToCart", product);
    },
    normalizePtValues(value) {
      return String(value).replace(".", ",");
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-submit {
  width: 100%;
  height: 50px;
  font-size: 19px;
  font-weight: bold;
  color: white;
  background: #54A3FF;
  border-radius: 3px;
  opacity: 1;
  border: none;
  margin: 22px 0px auto 0px;
  padding: 15px 43px;
}
.d-flex {
  display: flex;
  align-items: center;

  p {
    margin: 0px 0px 20px 4px;
    font-size: 19px;
    letter-spacing: 0px;
    color: #7F7575;
    opacity: 1;
  }
}

.total-line {
  display: flex;
  justify-content: space-between;
}

.total-labels {
  font-size: 19px;
  letter-spacing: 0px;
  color: #7F7575;
  opacity: 1;
  margin: 9px 0px;

  &-frete {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0px;
    color: #423B3B;
    opacity: 1;
    margin: 9px 0px;
  }

  &-subtotal {
    text-align: right;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0px;
    color: #423B3B;
    opacity: 1;
    margin: 9px 0px;
  }

  &-total {
    font-weight: bold;
    font-size: 27px;
    letter-spacing: 0px;
    color: #423B3B;
    opacity: 1;
    margin: 9px 0px;
  }

}

.m-10 {
  margin: 10px;
}

.btn-delete {
  margin: 0px 4px;
  color: white;
  background: #54A3FF;
  padding: 2px 5px;
  border-radius: 100%;
  font-weight: bold;
  font-size: 12px;
}

h1 {
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0px;
  color: #363636;
  margin: 0px;
  text-align: left;
}

.product-list {
  width: 70%;
  @media screen and (max-width: 1393px) {
    width: 80%;
  }
}

.contents {
  display: flex;
  flex-grow: unset;
  flex-wrap: wrap;
}

.card {
  display: flex;
  align-items: center;
  margin: 19px 0px;
  text-align: center;
  cursor: pointer;
}

.btn-delete {
  display: none;
}

.card:hover {
  .btn-delete {
    display: block;
  }
}

.card-box-img {
  width: 60px;
  height: 53px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

}

.card-title {
  text-align: left;
  font-size: 14px;
  font-family: 'Open Sans';
  letter-spacing: 0px;
  color: #7F7575;
  opacity: 1;
}

.card-price {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #423B3B;
  opacity: 1;
}

.card-img {
  margin: 0 auto;
  width: 41px;
  height: 42px;
}
</style>