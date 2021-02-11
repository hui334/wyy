<template>
 <div>
	 <maintab v-show="!showaa"></maintab>	 
	  <router-view v-slot="{ Component }">
	     <keep-alive>
	       <component :is="Component" />
	     </keep-alive>
	   </router-view>
 </div>
</template>
<script>
	import maintab from '@/components/tab/maintab.vue'
	export default{
		name:'app',
		components:{
			maintab
		},
		computed:{
			showaa(){
				return this.$route.path.includes('detail')
			}
		},
		
	}
</script>
<style>

</style>
