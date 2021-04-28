<template>
	<div style="margin-left: 7.55rem;">
					  <div>
						<el-carousel :interval="4000" type="card" height="12.5rem" ref='aa' class="zxv">
					     <el-carousel-item v-for="item in banner" :key="item" >
					       <a href=""><img :src="item.imageUrl" alt="" class="fgd"></a>
					     </el-carousel-item>
						</el-carousel>
					  </div>
					  	<div>推荐歌单</div>
					<div class="dv">
					  		<div v-for="(value,index) in recommend" class="th" @click="playlist(index)">
					  			<img :src="value.picUrl" alt="" class="asx">
					  			<span class="sc">{{value.name}}</span>
							</div>
					 </div>
					  	<div class="qt">最新音乐</div>
					 <div class="yhj">
					  	<div v-for="(value,index) in newmusic" class="qw" @click="audio(index)">
					  		<div class="ef">{{index+1}}</div>
					  		<img :src="value.picUrl" alt="" class="dtg" >
					  		<div class="rty"><p>{{value.name}}</p><p>{{value.song.artists[0].name}}</p></div>
					  	</div>
					  </div>
					  	<div>推荐MV</div>
					  <div class="plo">
					  	<div v-for="(value,index) in mv" class="tk" @click="mvlist(index)">
					  		<img :src="value.picUrl" alt="" class="lj">
					  		<p>{{value.name}}</p>
					  		<p class="ed">{{value.artistName}}</p>
					  	</div>
					  </div>
	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export default{
		name:'ho',
		components:{
			
		},
		emits:['gdx'],
		props:{
			recommend:null,
			ss:null,
			banner:null,
			newmusic:null,
			mv:null,
		},
		mounted() {
			this.$refs.aa.setActiveItem(1)
		},
		methods:{
			mvlist(index){
				this.$router.push("/mvs/"+this.mv[index].id)
			},
			
			audio(index){
				let a="https://music.163.com/song/media/outer/url?id="+this.newmusic[index].id+".mp3"
				let b=true
				let c=this.newmusic.findIndex((value)=>{
					return value.id==this.newmusic[index].id
				})
				console.log(c)
				this.$store.commit('gq',this.newmusic[index].name)
				this.$store.commit('lb',this.newmusic)
				this.$store.commit('sy',c)
					this.$store.commit('gburl',a)
					this.$store.commit('gbbf',b)
					//console.log(this.$store.state.bf)
					 /* request({
						  url:'/song/url',
						  params:{
							  id:this.newmusic[index].id
						  }
					  }).then((res)=>{
					  this.$emit('gdx',res.data.data[0].url)
					  })  	 */	 
			},
			playlist(index){
				this.$router.push("/playlist/"+this.recommend[index].id)
			}
			
		}
	}
</script>

<style scoped="scoped">
	.ed{
		opacity: .5;
	}
	.lj{
		width: 14.3125rem;
		height: 8.6875rem;
		border-radius: 0.3125rem;
	}
	.tk{
		margin: 1.25rem 1.25rem;
		cursor: pointer;
	}
	.rty{
		margin-left:1rem;
		margin-top: 0.75rem;
	}
	.dtg{
		width: 4.375rem;
		height: 4.375rem;
		flex-wrap: wrap;
		margin-top: 0.75rem;
	}
	.sc{
		font-size: 0.9rem;
	}
	.ef{
		line-height: 6.0625rem;
		margin-right: 1.25rem;
	}
	.yhj{
		display: flex;
		flex-wrap: wrap;
		margin-top: 1.25rem;
	}
	.plo{
		display: flex;
		font-size: 0.75rem;
	}
	.qt{
		padding: 1.25rem;
	}
	.dv{
		display: flex;
		flex-wrap: wrap;
	}
	.asx{
		width: 100%;
		border-radius: 0.3125rem;
	}
	.th{
		width: 11.25rem;
		height: 13.75rem;
		margin: 20px 10px;
		cursor: pointer;
	}
	.fgd{
		height: 100%;
		width: 100%;
		border-radius: 0.375rem;
	}
	.zxv{
		width: 62.5rem;
	}
	.qw:hover{
		background-color:#ededed ;
		cursor: pointer;
	}
	.qw{
		display: flex;width: 30.5625rem;height: 6.0625rem;font-size: 0.75rem;
		
	}
</style>
