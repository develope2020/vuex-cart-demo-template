const state = {
  cartProducts: JSON.parse(sessionStorage.getItem('cart-products')) || []
}

const getters = {
  totalCount () {
    return state.cartProducts.reduce((sum, prod) => sum + prod.count, 0)
  },

  totalPrice () {
    return state.cartProducts.reduce((sum, prod) => sum + prod.totalPrice * 100, 0) / 100
  },

  checkedTotalCount () {
    return state.cartProducts.reduce((sum, prod) => {
      if (prod.isChecked) {
        sum += prod.count
      }
      return sum
    }, 0)
  },

  checkedTotalPrice () {
    return state.cartProducts.reduce((sum, prod) => {
      if (prod.isChecked) {
        sum += prod.totalPrice * 100
      }
      return sum
    }, 0) / 100
  }
}

const mutations = {
  addToCart (state, product) {
    const prod = state.cartProducts.find(item => item.id === product.id)
    if (prod) {
      prod.count++
      prod.totalPrice = prod.price * 100 * prod.count / 100
    } else {
      state.cartProducts.push({
        ...product,
        isChecked: true,
        count: 1,
        totalPrice: product.price
      })
    }
  },
  removeToCart (state, id) {
    const index = state.cartProducts.find(item => item.id === id)
    state.cartProducts.splice(index, 1)
  },
  changeState (state, { prodId, isCheck }) {
    const prod = state.cartProducts.find(item => item.id === prodId)
    if (prod) {
      prod.isChecked = isCheck
    }
  },
  updateAllProductChecked (state, checked) {
    state.cartProducts.forEach(item => {
      item.isChecked = checked
    })
  },
  updateProduct (state, { prodId, count }) {
    const prod = state.cartProducts.find(item => item.id === prodId)
    if (prod) {
      prod.count = count
      prod.totalPrice = prod.price * 100 * count / 100
    }
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
