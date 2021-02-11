<template>
	<div>
		<div class="desc">{{goodsimage.desc}}</div>
		<div v-for="value in goodsimage.detailImage" class="key">
		<div class="bn">{{value.key}}</div>
		<div v-for="(value,index) in value.list">
			<img :src="value" alt="" :key='index' class="bimg" >
		</div>
		</div>
		<!-- <div v-for="value in goodsimage.detailImage[0].list"><img :src="value" alt=""></div> -->
	</div>
</template>

<script>
	export default{
		name:'goods',
		props:{
			goodsimage:Object
		},
		components:{
			
		},
		
	}
</script>

<style>
	.bn{
		color: #FFC0CB;
	}
	.bimg{
		width: 375px !important;
		height: 350px;
	}
	.desc{
		margin-top: 20px;
		overflow: hidden;
		color:#FFC0CB;
		font-size: 12px;
	}
	.key{
		margin-top: 20px;
	}
</style>
