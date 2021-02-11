<template>
	<div class="aitem">
		<div v-for="(value,index) in goods" :key='index' class="item" @click="btn(index)">
			<a :href="a+value.iid">
				<img :src="value.show.img" alt="">
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
			goods:Array
		},
		data(){
			return{
				a:'/detail/'
			}
		},
		methods:{
			/* btn(index){
				console.log(this.goods[index].iid)
				this.$router.push('/detail/'+this.goods[index].iid)
			} */
		}
	}
</script>

<style>
	
	.item img{
		width: 100%;
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
