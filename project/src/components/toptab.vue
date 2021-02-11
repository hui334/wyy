<template>
	<div class="toptab">
		<div class="left"><slot name="left" ></slot></div>
		<div class="center"><slot name="center" ></slot></div>
		<div class="right"><slot name="right" ></slot></div>
	</div>
</template>

<script>
</script>

<style>
	.left,.right{
		width: 50px;
		
	}
	.center{
		flex: 1;
		
	}
	.toptab{
		text-align: center;
		display: flex;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		height: 40px;
		line-height: 40px;
		
		z-index: 999;
	}
</style>
