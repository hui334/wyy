<template>
	<div>
		<table class="asd">
			<tr v-for="(value,index) in cm" >
				<td v-for="value in value" >{{value}}</td>
			</tr>
		</table>
		<table class="jk">
			<tr v-for="(value,index) in cs" >
				<td>{{value.key}}</td>
				<td class="ol">{{value.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default{
		name:'parameter',
		props:{
			cm:Object,
			cs:Object,
		},
		data(){
			return{
				ta:2
			}
		},
		components:{
			
		}
	}
</script>

<style>
	.ol{
		width: 200px;
		padding-left: 30px;
	}
	.jk{
		border-top: 20px solid white;
		text-align: center;
		border-collapse: collapse;
		font-size: 14px;
		margin-left: -15px;
		width: 100%;
	}
	.jk tr{
		height: 50px;
		border-bottom:1px solid #f2f0f2;
	}
	.asd{
		text-align: center;
		font-size: 14px;
		border-collapse: collapse;
	}
	.asd tr td{
		width: 80px;
	}
	.asd tr{
		border-bottom:1px solid #f2f0f2;
		height: 50px;
	}
</style>
