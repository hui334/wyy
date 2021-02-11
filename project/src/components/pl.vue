<template>
	<div class="pl">
		<div class="gd">
			<span>用户评价</span>
			<span class="sp">更多</span>
		</div>
		<div class="tp">
			<img :src="pla.avatar" alt="">
			<span>{{pla.uname}}</span>
		</div>
		<div class="st">
			<p>{{pl.content}}</p>
			<div>
				<span>{{sj}}</span>
				<span>{{pl.style}}</span>
			</div>
			<div class="cv" v-show="shi">
				<img :src="value" alt="" v-for="value in pl.images">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'pl',
		props:{
			pl:Object,
			pla:Object
		},
		data(){
			return {
				shi:false
			}
		},
		computed:{
			sj(){
				return new Date(parseInt(this.pl.created) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
			}
		},
		updated() {
			console.log(this.pl.images)
				if(this.pl.images){
					this.shi=true
				}else{
					this.shi=false
				}
			
		}
	}
</script>

<style>
	.st{
		margin-left: 5px;
	}
	.cv img{
		margin-left: 3px;
		margin-top: 10px;
	}
	.pl{
		border-top:2px solid #f2f0f2 ;
		/* height: 340px; */
		border-bottom: 4px solid #f2f0f2;
	}
	.gd{
		height: 40px;
		line-height: 40px;  
	}
	.sp{
		margin-left: 200px;
	}
	.gd:first-child{
		margin-left: 10px;
	}
	.tp img{
		border-radius: 50%;
		width: 15% !important;
		margin-left: 10px;
		margin-top: 15px;
	}
	.tp{
		
		border-top: 2px solid #f2f0f2 ;
	}
	.tp span{
		position: relative;
		margin-left: 10px;
		bottom: 18px;
	}
</style>
