<template>
	<div class="arecommend">
		<div v-for="value in recommend" class="recommend"><a :href="value.link"><img :src="value.image" alt=""><div>{{value.title}}</div></a></div>
	</div>
</template>

<script>
	export default{
		name:'recommend',
		components:{},
		data(){
			return{}
		},
		props:{
			recommend:Array
		}
		
	}
</script>

<style>
	.arecommend{
		display: flex;
		padding-bottom: 15px;
		border-bottom: 8px solid aliceblue;
		margin-top: 8px;
		font-size: 10px;
	}
	.recommend img{
		width: 80%;
		height: 80%;
	}
	.recommend{
		flex: 1;
		text-align: center;
		
	}
</style>
