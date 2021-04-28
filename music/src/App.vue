<template>
	<div id='app'>
		  <router-view :key="$route.fullPath">
		  </router-view>
		<fo></fo>
	</div>
  
</template>

<script>
import fo from '@/components/fo.vue'

export default {
  name: 'App',
  components: {
    fo
  },
  mounted() {
  	document.addEventListener('click', () => {
  		this.isss = false
  		this.$store.commit("gb",this.isss)
  	})
  
  },
  
}
</script>

<style>

</style>
