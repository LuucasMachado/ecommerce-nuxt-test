<template>
  <div class="product-list">
  <div class="title-content">
    <p class="title-products-list">Games</p>
    <select name="" class="select-order" @change="orderBy($event.target.value)">
      <option value="popular">Mais populares</option>
      <option value="alphabetical" onClick={orderByAlphabetical()}>Alfabética</option>
    </select>
  </div>
    <div class="contents">
      <div v-for="product in products">
        <div class="card" :key="product.id" @click="addToCart(product)">
          <div class="card-box-img">
            <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="card-img">
          </div>
          <div class="card-title">
            {{product.name}}
          </div>
          <div class="card-price">
            <span class="content-price">
              R$ {{product.price}}
            </span>
            <span class="content-adc"><a>Adicionar ao carrinho</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommerceList',
  props: {
    products: [],
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
    orderBy(value) {
      if(value === 'alphabetical') {
        this.$store.dispatch("orderByAlphabetical");
      }else if(value === 'popular') {
        this.$store.dispatch("orderByScore");
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .select-order {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    opacity: 1;
    padding: 12px 100px 12px 12px;
  }
  .title-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 6%;
  }

  .title-products-list {
    font-weight: 600;
    font-size: 48px;
    letter-spacing: 0px;
    color: #363636;
    margin: 0px;
    text-align: left;
  }

  .product-list {
    width: 70%;
  }

  .contents {
    display: flex;
    flex-grow: unset;
    flex-wrap: wrap;
  }
  .card {
    margin: 15px;
    text-align: center;
    cursor: pointer;
  }
  div.card:hover {
    .content-price {
      display: none;
    }
    .content-adc {
      display: block;
    }
  }
  .card-box-img {
    width: 262px;
    height: 230px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .card-title {
    letter-spacing: 0px;
    color: #746A6A;
    opacity: 1;
    padding-top: 10px;
    padding-bottom: 2px;
  }
  .card-price {
    letter-spacing: 0px;
    color: #3486E6;
    display: block;
    font-weight: bold;
    font-size: 16x;
    text-align: center;
  }
  .card-img {
    margin: 0 auto;
  }
  .content-adc {
    display: none;
  }
  .content-price {
    display: block;
  }
</style>