<template>
	<div class="buttomtab">
		<div @click="cli()" v-if="!show"><slot name="qw"></slot></div>
		<div v-else><slot name="as"></slot></div>
		<div><slot name="zx"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'buttomtab',
		components:{},
		data(){
			return{
				
			}
		},
		props:{
			path:String
		},
		methods:{
			cli(){
				this.$router.replace(this.path)
			}
		},
		computed:{
			show(){
				return this.$route.path.includes(this.path)
			}
		}
	}
</script>

<style>
	.buttomtab{
		flex: 1;
		font-size: 10px;
		text-align: center;
		margin-top: 5px;
		
	}
	.buttomtab img{
		width: 20px;
		height: 20px;
	}
</style>
