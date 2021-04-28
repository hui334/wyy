<template>
	<div>
		<div class="tf">
			<span class="dx">搜索</span>
			<span class="cd">{{$route.params.name}}</span>
			<span class="qa">找到{{count}}个结果</span>
		</div>
		<div>
			<div class="title">
				<span v-for='value in tit' @click="titcl(index)" >{{value}}</span>
			</div>
			 <el-table
			    :data="song"
			    stripe
			    class="xc"
				
				@row-click='tb'
				
				
				>
				<el-table-column
				type="index">
				</el-table-column>
			    <el-table-column
				align="center"
				
			      prop="name"
			      label="音乐标题"
			      width="250">
			    </el-table-column>
			    <el-table-column
				align="center"
			      prop="artists[0].name"
			      label="歌手"
			      width="180">
			    </el-table-column>
			    <el-table-column
				align="center"
			      prop="album.name"
			      label="专辑">
			    </el-table-column>
				<el-table-column
				align="center"
				  prop="duration"
				  label="时长">
				  
				</el-table-column>
			  </el-table>
		</div>
		<div class="dg"><el-pagination
		  background
		  layout="prev, pager, next"
		  :total="count/30*10"
		  @current-change='page'
		  >
		</el-pagination></div>

	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export default{
		name:"sea",
		components:{},
		data(){
			return{
				song:[],
				count:'',
				url:'',
				tit:['歌曲','歌单','MV'],
				iscur:0
			}
		},
		created() {
			console.log(this.$route.params.name)
			request({
				url:'/search',
				params:{
					keywords:this.$route.params.name
				}
			}).then((res)=>{this.song=res.data.result.songs
			this.count=res.data.result.songCount
			for (let s of this.song) {
				let a=parseInt(s.duration/1000%60)
				let b=parseInt(s.duration/1000/60%60)
				a<10? a='0'+a:a,
				b>10? b:b="0"+b
				s.duration=b+':'+a
			}
			})
			
		},
		/* watch:{
			//监听路由的改变
			'$route'(to,from){
				if(to.params.name!=from.params.name){
					this.$route.params.name=to.params.name
					console.log(this.$route.params.name)
				}
				
			}
		}, */
		methods:{
			titcl(index){
				if(index==0){
					
				}else if(index==1){
					
				}else{
					
				}
			},
			tb(row){
				let a="https://music.163.com/song/media/outer/url?id="+row.id+".mp3"
				let b=true
				let c=this.song.findIndex((value)=>{
					return value.id==row.id
				})
				console.log(c)
				this.$store.commit('lb',this.song)
				this.$store.commit('sy',c)
				this.$store.commit('gq',row.name)
					this.$store.commit('gburl',a)
					this.$store.commit('gbbf',b)
			},
			page(index){
				request({
					url:'/search',
					params:{
						keywords:this.$route.params.name,
						offset:index
					}
				}).then((res)=>{this.song=res.data.result.songs
			this.count=res.data.result.songCount
			for (let s of this.song) {
				s.duration=parseInt(s.duration/1000/60%60)+':'+parseInt(s.duration/1000%60)
			}
			window.scroll(0,0)
			})
			}
		}
		
		
	}
</script>

<style scoped="scoped">
	.dg{
		margin-top: 1.5625rem;
		position: relative;
		left:46.875rem;
	}
	.xc{
		width: 100%;
	}
	.cd{
		font-size: 28px;		
	}
	.dx,.qa{
		font-size: 0.625rem;
		opacity: .5;
	}
	.tf{
		height: 1.875rem;
	}
	.title span{
		padding: 2px 15px;
		cursor: pointer;
	}
	.title{
		style=height: 40px;
		margin-top: 35px;
		margin-bottom: 5px;
	}
</style>
