<template>
	<div class="shopstore">
		<div>
			<div class="bds">
				<img :src="sh.shopLogo" alt="" class="bd">
				<span>{{sh.name}}</span>
			</div>
		</div>
		<div class="kuai">
			<div class="xs">
				<div class="xl">
					<span>{{hh}}</span>
					<span class="goods">{{sh.cGoods}}</span>
						<div class="bb">
							<span>总销量</span>
							<span class="all">全部宝贝</span>
						</div>
				</div>
			</div>
			<div class="hbc">
				<table class="tab">
					<tr  v-for="(value,index) in sh.score" :key='index'>
						<td class="name">{{value.name}}</td>
						<td class="score">{{value.score}}</td>
						<td :class="{act:value.isBetter}" class="actmore">{{value.isBetter? '高':'低'}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="gg">进店逛逛</div>
	</div>
</template>

<script>
	export default{
		name:'shopstore',
		props:{
			sh:Object
		},
		components:{
			
		},
		computed:{
			hh(){
				return (this.sh.cSells/10000).toFixed(1)+'万'
			}
		}
		
	}
</script>

<style>
	.gg{
		width: 120px;
		background-color: #f2f0f2;
		margin-top: 20px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		margin-left: 100px;
		border-radius: 35px;
	}
	.all{
		margin-left: 20px;
	}
	.bb{
		margin-top: 15px;
		font-size: 13px;
	}
	.goods{
		margin-left: 30px;
	}
	.xl{
		margin-left: 20px;
		margin-top: 20px;
	}
	.name,.score{
		font-size: 10px;
	}
	.tab td{
		padding:3px;
	}
	.hbc{
		margin-left: 25px;
	}
	.actmore{
		background-color: greenyellow;
	}
	.act{
		background-color:#ffdbd5;
	}
	.kuai{
		display: flex;
		text-align: center;
	}
	.xs{
		width: 150px;
		border-right: 2px solid #f2f0f2;
	}
	.bd{
		border-radius: 50%;
		border: 1px solid #f2f0f2;		
	}
	.shopstore{
		border-top: 10px solid #f2f0f2;
		
	}
	.bds{
		margin-top: 30px;
		margin-left: 15px;
		display: flex;
	}
	.bds span{
		margin-top: 25px;
		margin-left: 10px;
		color: #FFC0CB;
	}
</style>
