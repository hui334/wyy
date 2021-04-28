import { createStore } from 'vuex'

export default createStore({
  state:{
		volume:50,
		isinput:'',
		url:'',
		bf:false,
		lb:'',
		index:'',
		name:''
  },
  mutations: {
	  syq(state){
		  state.index-=1
	  },
	  xyq(state){
		  state.index+=1
	  },
	  gq(state,value){
		  state.name=value
	  },
	  bfwb(state){
		  state.index+=1
	  },
	  sy(state,value){
		  state.index=value
	  },
	  lb(state,value){
		  state.lb=value
	  },
	  gb(state,value){
		state.isinput=value  
	  },
	  gburl(state,value){
	  		state.url=value  
	  },
	  gbbf(state,value){
	  		state.bf=value
			setTimeout(()=>{
				 state.bf=''
			 },1000)
	  }
  },
  actions: {
  },
  modules: {
  }
})
