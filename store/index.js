import productsJson from "~/products.json";

export const state = {
  products: [],
  cart: [],
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit('setProducts', productsJson)
  },
  addProductToCart({ commit }, product) {
    const slicedProduct = product
    commit('addProductToCart', slicedProduct)
  },
  removeProductToCart({ commit }, product) {
    const slicedProduct = product
    commit('removeProductToCart', slicedProduct)
  },
  orderByAlphabetical({ commit }) {
    commit('orderByAlphabetical')
  },
  orderByScore({ commit }) {
    commit('orderByScore')
  },
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  addProductToCart(state, product) {
    state.cart.push(product)
    console.log(state.cart)
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
}