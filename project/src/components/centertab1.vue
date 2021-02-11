<template>
	<div class="centertab">
		<van-tabs v-model:active="active" title-active-color='blue' sticky @click='cli' ref='ccc' >
		  <van-tab title="流行" ></van-tab>
		  <van-tab title="新款"></van-tab>
		  <van-tab title="精选"></van-tab>
		</van-tabs>
	</div>
</template>

<script>
	
	import { ref } from 'vue';
	
	export default{
		name:'centertab',
		props:{
			title:Array
		},
		components:{
			
		},
		setup() {
		    const active = ref(0);
		    return { active,};
		  },
		methods:{
			cli(name,title){
				console.log(name)
				this.$emit('btcli',name)
			}
		}
	}
</script>

<style>

	
</style>
