<template>
	<div class="aitem">
		<div v-for="(value,index) in goods" :key='index' class="item" @click="btn">
			<a :href="a+value.item_id">
				<img :src="value.image" alt="">
			</a>
				<p class="title">{{value.title}}</p>				
				<span class="collect"><span>{{value.price}}</span><img src="@/assets/collect.svg" alt=""></span>
				<span class="acfav">{{value.cfav}}</span>
				</div>
	</div>
</template>

<script>
	export default{
		name:'item',
		props:{
			goods:Object
		},
		data(){
			return{
				a:'/detail/'
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.item img{
		width: 100% !important;
		border-radius: 5px;
	}
	.item{
		padding: 4px;
		width: 150px;
		margin-left: 20px;
	}
	.aitem{
		display: flex;
		flex-wrap: wrap;
		font-size: 10px;
		margin-top: 20px;
	}
	.collect img{
		width: 8% !important;		
		margin-left: 6px;
	}
	.title{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.collect{
		margin-left: 45px;
		
	}
	.collect span{
		color: #FFC0CB;
	}
</style>
