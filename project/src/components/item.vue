<template>
	<div class="aitem">
		<div v-for="(value,index) in goods" :key='index' class="item" @click="btn(index)">
			
				<img :src="value.show.img" alt="">
			
				
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
			goods:Array
		},
		data(){
			return{
				a:'/detail/'
			}
		},
		methods:{
			btn(index){
				console.log(this.goods[index].iid)
				this.$router.push('/detail/'+this.goods[index].iid)
			}
		}
	}
</script>

<style>
	
	.item img{
		width: 100%;
		border-radius: 5px;
		
	}
	.item{
		padding: 0.25rem;
		width: 9.375rem;
		margin-left: 1.25rem;
		
	}
	.aitem{
		display: flex;
		flex-wrap: wrap;
		font-size: 10px;
		
	}
	.collect img{
		width: 8%;		
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
