<template>
	<div class="buttom">
		<slot></slot>
	</div>
</template>

<script>
	
	export default{
		name:'buttom',
		components:{
			
		}
	}
</script>

<style>
	.buttom{
		background-color:aqua;
		display: flex;
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		z-index: 999;
	}
</style>
