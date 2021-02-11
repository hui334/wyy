<template>
  <div>
  	  <toptab class="ll"><template v-slot:center>购物车({{ss? ss.length:''}})</template></toptab>
  	  
  	  <div class="as" v-for="(ite,index) in ss" >
  		 <van-card
  		   :num="ite.num"
  		   :price="(ite.relprice*ite.num).toFixed(2)"
  		   :desc="ite.desc"
  		   :title="ite.title"
  		   :key="index"
		   ref='cc'
  		 >
  		 <template #thumb>
  		 
  		    <van-checkbox icon-size='15px' class="an" ref='aaa' v-model="check" @change='as' :key="index" ></van-checkbox>
  		  
  		  <img :src="ite.image" alt="" class='cl'>
  		 </template>
  		   <template #num>
  		     <van-stepper v-model="ite.num" button-size='15px' />
  		   </template>
  		 </van-card>
  	  </div>
  	 
  	 <van-submit-bar :price="(jg? jg:0)" button-text="提交订单"  :safe-area-inset-bottom="false" class="tj" >
  	   <van-checkbox v-model="checked" @click='checkall'>全选</van-checkbox>
  	   <template #tip>
  	     你的收货地址不支持同城送, <span >修改地址</span>
  	   </template>
  	 </van-submit-bar>
  	 
  </div>
</template>
<script>
	import toptab from '@/components/toptab'
	import { ref } from 'vue'
	export default{
		name:'shopcart',
		data(){
			return{
				ss:{}/*, this.$store.state.cart */,
			}
		},
		methods:{
			checkall(){
				if(this.checked==true){
					this.$refs.aaa.toggle(true)
					
				}else{
					this.$refs.aaa.toggle(false)
				}
			},
			as(){
				if(this.check==true){
					this.checked=true
				}else{
					this.checked=false
				}
			}
		},
		components:{
			toptab
		},
		computed:{
			jg(){
				if(this.ss){
					let a=0
					for (let s of this.ss) {
						a+=(s.relprice*s.num)*100
					}
					return a
				}else{
					return
				}
				
			}
		},
		setup() {
			
		    const value = ref(1);
			const check=ref(false)
			const checked=ref(false)
		    return {
				value,
				check,
				checked
			};
		  },
		  created() {
		  	this.ss=JSON.parse(sessionStorage.getItem('sj'))
		  },
		  mounted() {
		  	console.log(this.$refs.cc)
		  }
	}
</script>
<style>
	.an{
		position: relative;
		left:-15px;
		top:30px;
	}
	.cl{
		height:100% ;
		width: 100%;
		position: relative;
		top:-20px
	}
	.tj{
		margin-bottom: 50px;
	}
	.ll{
		background-color: #FFC0CB;
		color: white;
	}
	.as{
		margin-top:40px;
	}
</style>