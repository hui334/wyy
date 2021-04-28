<template>
	<div class="header">
		<div>
			<el-input v-model="input" placeholder="搜索" prefix-icon='el-icon-search' style="position: relative;right: 15.625rem;top: 0.625rem;"
			 @click.stop="hq" @keyup.enter='search' @input='sr'></el-input>
			 <div class="ss" v-if="$store.state.isinput" @click.stop>
			 				  <div class="ax" v-if="gkd">
			 					   <p class="sjb">热门搜索</p>
			 					<div class="yu">
			 						<el-button type="text" v-for="(value,index) in ss" @click='sj(value.first)'>{{value.first}}</el-button>
			 					</div>					  
			 				  </div>
							<div v-else>
								<div class="gh"><svg t="1613460700471" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10926" width="16" height="16"><path d="M0 0v1024h839.68V839.68h184.32V0H0z" fill="#F45D5D" p-id="10927"></path><path d="M839.68 1024V839.68h184.32L839.68 1024z" fill="#EA4747" p-id="10928"></path><path d="M482.3552 455.68a115.2 115.2 0 1 1-115.2 115.2 115.328 115.328 0 0 1 115.2-115.2m0-76.8a192 192 0 1 0 192 192 192 192 0 0 0-192-192z" fill="#FFEBEB" p-id="10929"></path><path d="M488.73728 251.24736l72.16896-26.26688 102.1312 280.6016-72.16896 26.26816z" fill="#FFEBEB" p-id="10930"></path><path d="M538.176 387.0848l52.6848 144.768L663.04 505.6a192.4992 192.4992 0 0 0-124.864-118.5152z" fill="#FFFFFF" p-id="10931"></path><path d="M733.6448 271.36l-19.8784 74.176-211.5584-57.28-13.4784-37.0176 71.8208-26.2656L733.6448 271.36z" fill="#FFEBEB" p-id="10932"></path><path d="M592.8704 312.8064l-31.9232-87.7184-0.192-0.0512-72.0256 26.2016 13.4784 37.0176 90.6624 24.5504z" fill="#FFFFFF" p-id="10933"></path></svg>单曲</div>
								<ul class="dq">
									<li v-for="(value,index) in sssj" @click="bfb(index)">{{value.name}}</li>
								</ul>
							</div>

			 </div>
		</div>
	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export default{
		name:'ssk',
		data(){
			return{
				input:'',
				sssj:'',
				ss:'',
				gkd:true
			}
		},
		/* watch:{
			'$route'(to,from){
				if(to.query){
					this.$router.go(0)
				}
			}
		}, */
		methods:{
			bfb(index){
				let id=this.sssj[index].id
				let a="https://music.163.com/song/media/outer/url?id="+id+".mp3"
				let b=true
					this.$store.commit('gburl',a)
					this.$store.commit('gbbf',b)
			},
			sj(value){
				this.$router.push("/search/"+value+"/songs")
				this.$store.commit('gb',false)
			},
			sr(){
				this.gkd=false
				setTimeout(()=>{
					if (this.input.trim() == "") {
						return
					}else{
							request({
									url:'/search/suggest',
									params:{
									keywords:this.input
									}
							}).then((res)=>{console.log(this.sssj=res.data.result.songs)})
						
					}
				},1000)
			},
			hq() {
				this.isss = true
				this.$store.commit("gb",this.isss)
				//console.log(this.$store.state.isinput)
				//console.log('12312')
			},
			search() {
				//console.log('a')
				if (this.input.trim() == "") {
					return
				} else {
					this.$router.push("/search/" + this.input + "/songs")
				}
			}
		},
		created() {
			request({
				url: '/search/hot'
			}).then((res) => {
				console.log(this.ss = res.data.result.hots)
			})
		}
	}
</script>

<style scoped="scoped">
	.sjb{
		font-size: 0.75rem;
	}
	.ax{
		padding: 0px 20px;
	}
	.gh{
		text-align: left;
		font-size: 12px;
		padding: 0px 20px;
	}
	.dq{
		padding: 0px;
	}
	.dq li{
		list-style: none;
		font-size: 12px;
		overflow: hidden;
		white-space: nowrap;
		padding: 0px 20px;
		text-align: left;
		cursor: pointer;
	}
	.yu{
		display: flex;
		flex-wrap: wrap;
	}
	.ss{
		position: fixed;
		right: 0;
		top: 4.125rem;
		background-color: #fff;
		width: 20.125rem;
		height: 37.25rem;
		z-index: 9;
		
	}
	.el-input__icon {
		height: 0px;
	}
	
	.header {
		position: fixed;
		top: 0rem;
		display: flex;
		justify-content: flex-end;
		background-color: #f9f9f9;
		width: 100%;
		height: 4.125rem;
	}
</style>
