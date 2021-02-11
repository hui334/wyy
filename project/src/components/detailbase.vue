<template>
	<div>
		<div>
			<div class="titles">{{sj.title}}</div>
			<div class="gfs">
				<span class="price">{{sj.newprice}}</span>
				<span class="oldprice"><del>{{sj.oldPrice}}</del></span>
				<span ><sup class="discount">{{sj.discount}}</sup></span>
			</div>
			<div class="ceo">
			<span v-for="value in sj.columns" class="columns">{{value}}</span>
			</div>
		</div>
		<div class="akl">
			<span v-for='value in sj.services' class="tb"><img :src="value.icon" alt="" style="width: 10px;"><span>{{value.name}}</span></span>
			<!-- <span>{{value.name}}</span> -->
			<!-- <span><img :src="sj.services[2].icon" alt="" style="width: 15px;"></span>
			<span>{{sj.services[2].name}}</span> -->
		</div>
	</div>
	
</template>

<script>
	export default{
		name:'detailbase',
		props:{
			sj:Object
		}
	}
</script>

<style>
	.price{
		color: #FFC0CB;
		font-size: 25px;
	}
	.oldprice{
		margin-left: 10px;
		font-size: 12px;
		opacity: 0.4;
	}
	.discount{
		border-radius: 8px;
		background-color: #FFC0CB;
		font-size: 13px;
		
	}
	.columns{
		opacity: 0.5;
		font-size: 12px;
		flex: 1;
		
	}
	.ceo{
		margin-top: 5px;
		display: flex;
		border-bottom: 2px solid #f2f0f2;
	}
	.titles{
		margin-top: 10px;
	}
	.gfs{
		margin-top: 10px;
	}
	.ceo>span{
		margin-left: 18px;
	}
	.tb{
		font-size: 10px;
		margin-left: 6px;
	}
	.akl{
		margin-top: 10px;
		
	}
</style>
