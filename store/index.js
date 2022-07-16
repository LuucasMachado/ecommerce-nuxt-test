import productsJson from "~/products.json";

export const state = {
  products: [],
  cart: [],
}

export const actions = {
  async nuxtServerInit({
    commit
  }) {
    commit('setProducts', productsJson)
  },
  addProductToCart({
    commit
  }, product) {
    const slicedProduct = product
    commit('addProductToCart', slicedProduct)
  },
  removeProductToCart({
    commit
  }, product) {
    const slicedProduct = product
    commit('removeProductToCart', slicedProduct)
  },
  orderByAlphabetical({
    commit
  }) {
    commit('orderByAlphabetical')
  },
  orderByScore({
    commit
  }) {
    commit('orderByScore')
  },
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  addProductToCart(state, product) {
    state.cart.push(product)
  },
  removeProductToCart(state, product) {
    state.cart.splice(state.cart.indexOf(product), 1)
  },
  orderByAlphabetical(state) {
    state.products = state.products.sort((a, b) => a.name.localeCompare(b.name))
  },
  orderByScore(state) {
    state.products = state.products.sort((a, b) => a.score - b.score).reverse();
  },
}

export const getters = {
  products(state) {
    return state.products
  },
  cart(state) {
    return state.cart
  },
  cartSubtotal(state) {
    return state.cart.reduce((a, b) => +a + +b.price, 0).toFixed(2);
  },
  cartFrete(state) {
    let subtotal = state.cart.reduce((a, b) => +a + +b.price, 0).toFixed(2);
    if (subtotal < 250.00) {
      return state.cart.length * 10;
    } else {
      return 0.00
    }
  },
  cartTotal(state) {
    let subtotal = state.cart.reduce((a, b) => +a + +b.price, 0).toFixed(2);
    let frete = 0;
    if (subtotal < 250.00) {
      frete = state.cart.length * 10;
    } else {
      frete = 0.00
    }

    return parseFloat(subtotal) + frete;
  }
}
