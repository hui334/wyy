import { createStore } from 'vuex'

export default createStore({
  state() {
	  return{
		  cart:[]
	  }
  },
  mutations: {
	  addcart(state,payload){
		  state.cart.push(payload)
	  }
  },
  actions: {
  },
  modules: {
  }
})
