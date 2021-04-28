<template>
  <div class="discover">
    <div class="card" @click='dis'>
		<div :style="{backgroundImage:'url('+ (list.coverImgUrl) +')'}" class="bgc"></div>
		<div><img :src="list.coverImgUrl+'?param=180y180'" alt=""></div>
		<div class="rt">
			<div class="an"><span>精品歌单</span></div>
			<p>{{list.name}}</p>
			<p class="bg">{{list.description}}</p>
		</div>
	</div>
	
	<ul class="tab">
		<li v-for="(value,index) in tab" :class="{co:index==current}" :key='index' class="tabitem" @click='tag(index)'>{{value}}</li>
	</ul>
	<div class="gds">
		<div v-for="(value,index) in item" :key='index' class='gd' @click="cv(index)">
			<div class="bfl">播放量:{{value.playCount}}</div>
			<img :src="value.coverImgUrl" alt="">
			<p class="lh">{{value.name}}</p>
		</div>
	</div>
	<div class="yp"><el-pagination
	  background
	  layout="prev, pager, next"
	  :total="1000"
	  @current-change='pages'
	  
	  >
	</el-pagination></div>
  </div>
</template>
<script>
	import {request} from '@/router/request.js'
	export default{
		name:'discoveritem',
		components:{},
		data(){
			return{
				list:'',
				isjg:true,
				item:'',
				pag:'全部',
				ym:0,
				current:0,
				tab: [
						"全部",
						"欧美",
						"华语",
						"流行",
						"说唱",
						"摇滚",
						"民谣",
						"电子",
						"轻音乐",
						"影视原声",
						"ACG",
						"怀旧",
						"治愈",
						"旅行"
				]
			}
		},
		methods:{
			cv(index){
				this.$router.push('/playlist/'+this.item[index].id)
			},
			dis(){
				this.$router.push('/playlist/'+this.list.id)
			},
			tag(index){
				this.current=index
				this.pag=this.tab[index]
				request({
					url:"/top/playlist/highquality",
					params:{
						limit:1,
						cat:this.tab[index]
					}
				}).then((res)=>{console.log(this.list=res.data.playlists[0])})
				request({
					url:"/top/playlist",
					params:{
						limit:50,
						cat:this.tab[index],
						offset:(this.ym-1)*50
					}
				}).then((res)=>{console.log(this.item=res.data.playlists)})
				
			},
			pages(index){
				this.ym=index
				request({
					url:"/top/playlist",
					params:{
						limit:50,
						cat:this.pag,
						offset:(this.ym-1)*50
					}
				}).then((res)=>{console.log(this.item=res.data.playlists)})
				setTimeout(() => {
				  window.scroll(0,0);
				}, 500);
			}
		},
		created() {
			request({
				url:"/top/playlist/highquality",
				params:{
					limit:1,
					cat:'全部'
				}
			}).then((res)=>{console.log(this.list=res.data.playlists[0])})
			request({
				url:"/top/playlist",
				params:{
					limit:50,
					cat:'全部',
					offset:0
				}
			}).then((res)=>{console.log(this.item=res.data.playlists)})
		}
	}
</script>
<style scoped="scoped">
	.lh{
		margin: 0rem;
	}
	.yp{
		margin-top: 1.5625rem;
		position: relative;
		left:46.875rem;
	}
	.bg{
		font-size: 10px;
		opacity: .6;
	}
	.rt{
		margin-left: 18px;
	}
	.co{
		color: pink !important;
	}
	.bfl{
		position: relative;
		top: 20px;
		font-size: 14px;
		background-color: #999999;
		padding: 3px 0px;
		border-radius: 5px;
		display: none;
	}
	.gd:hover .bfl{
		display: block;
	}
	
	.an{
		border: 1px red solid;
		text-align: center;
		width: 110px;
		height: 30px;
		line-height: 30px;
		border-radius: 8px;
	}
	.gd{
		width: 19%;
		margin: 8px 0.3125rem;
		cursor: pointer;
	}
	.gds{
		display: flex;
		flex-wrap: wrap;
	}
	.gd img{
		width: 100%;
		height: 89%;
		border-radius: 5px;
	}
	.tabitem{
		padding: 0px 10px;
		font-size: 0.8rem;
		cursor: pointer;
		color: #99A9BF;
	}
	.tab{
		list-style: none;
		display: flex;
		justify-content: flex-end;
	}
	.card img{
		/* padding:18px 11px; */
		border-radius: 5px;

	}
	.card{
		display: flex;
		cursor: pointer;
	}
	.bgc{
		border: 1px;
		width:1200px;
		background-repeat:no-repeat;
		background-size:cover;
		-webkit-filter:blur(15px);
		-moz-filter:blur(15px);
		-o-filter:blur(15px);
		-ms-filter:blur(15px);
		filter:blur(90px);
		position:absolute;
		height: 80px;
		left:310px;
		top:140px;
		z-index: 0;
}
</style>