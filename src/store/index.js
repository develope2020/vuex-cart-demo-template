import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

function myPlugin (store) {
  store.subscribe((mutation, state) => {
    console.log(mutation)
    if (mutation.type.startsWith('cart/')) {
      sessionStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
    }
  })
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products
  },
  plugins: [myPlugin]
})
