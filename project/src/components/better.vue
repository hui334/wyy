<template>
	<div class="wrapper" ref='aaa'>
		<div class="content"><slot></slot></div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import PullUp from '@better-scroll/pull-up'
	export default{
		name:'better',
		data(){
			return{
				scroll:''
			}
		},
		mounted() {
			BScroll.use(PullUp)
			this.scroll=new BScroll(this.$refs.aaa,{
				probeType:3,
				useTransition:false,
				click:true,
				observeDOM:true,
				pullUpLoad:true,
				
			})
			this.scroll.on('scroll',(position)=>{
				//console.log(position)
				this.$emit('show',position)
			})
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullingUp')
			})
		}
	}
</script>

<style>
	
</style>
