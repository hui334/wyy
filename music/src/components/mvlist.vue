<template>
	<div class="tj">
		<div>
			<p class="bt">MV详情</p>
			<div class="vid">
				<video :src="videourl.url" controls></video>
			</div>
			<div class="tx">
				<img :src="authorurl+'?param=120y120'" alt="">
				<p>{{author.artistName}}</p>
			</div>
			<p class="bt">{{author.name}}</p>
			<div class="bfl">
				<span>发布:{{author.publishTime}}</span>
				<span>播放:{{author.playCount}}</span>
			</div>
			<div>
				<div class="jc"><p>精彩评论</p></div>
				<div v-for='(value,index) in plsl.hotComments' class="hotpl">	
					<div class="tp"><img :src="value.user.avatarUrl" alt=""></div>
					<div class="dzh">
						<div>
							<p>
							<span>{{value.user.nickname}}:</span>
							<span class="content">{{value.content}}</span>
							</p>
						</div>
						<div class="dz">
							<div>{{value.time}}</div>
							<div><img src="@/assets/dz.svg" alt=""><span>{{value.likedCount}}</span></div>
						</div>
					</div>
				</div>
				<div class="newpl">
					<div class="jc"><p>最新评论({{plsl.total}})</p></div>
					<div v-for='(value,index) in plsl.comments' class="hotpl">
						<div class="tp"><img :src="value.user.avatarUrl" alt=""></div>
						<div class="dzh">
							<div>
								<p>
								<span>{{value.user.nickname}}:</span>
								<span class="content">{{value.content}}</span>
								</p>
							</div>
							<div class="dz">
								<div>{{value.time}}</div>
								<div><img src="@/assets/dz.svg" alt=""><span>{{value.likedCount}}</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="ybf"><el-pagination
				  background
				  layout="prev, pager, next"
				  :total="plsl.total/20*10"
				  @current-change='sb'
				  
				  >
				</el-pagination></div>
			</div>	
		</div>
		<div class="xgtj">
			<p class="bt">相关推荐</p>
			<div v-for="(value,index) in tjmv" class="tjmv" @click="djtj(index)">
				<div><img :src="value.cover+'?param=500y260'" alt=""></div>
				<div class="mvxx">
					<div>{{value.name}}</div>
					<div>by{{value.artistName}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export default{
		name:'mvlist',
		data(){
			return{
				videourl:'',
				author:'',
				tjmv:'',
				authorurl:'',
				plsl:''
			}
		},
		components:{
			
		},
		methods:{
			djtj(index){
				this.$router.push("/mvs/"+this.tjmv[index].id)
			},
			sb(index){
				request({
					url:'/comment/mv',
					params:{
						id:this.$route.params.id,
						offset:(index-1)*20
					}
				}).then((res)=>{console.log(this.plsl=res.data)
				function timestampToTime(timestamp) {
				        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				       let Y = date.getFullYear() + '-';
				       let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';	
				       let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';		
				       let h = date.getHours() < 10 ? '0' + date.getHours()+ ':' : date.getHours() + ':';			
				       let m = date.getMinutes() < 10 ? '0' + date.getMinutes()+ ':' : date.getMinutes() + ':';		
				       let s = date.getSeconds();		
				        return Y+M+D+h+m+s;
				    }
				for (let s of this.plsl.comments) {
					s.time=timestampToTime(s.time)
				}
				})
				window.scroll(0,700)
			}
		},
		watch:{
			'$route'(to, from) {
			    if (to.query.id!=from.query.id) {
			      this.$route.params.id=to.query.id
			    }
			  }
		},
		created() {
			request({
				url:'/mv/url',
				params:{
					id:this.$route.params.id
				}
			}).then((res)=>{console.log(this.videourl=res.data.data)})
			request({
				url:'/mv/detail',
				params:{
					mvid:this.$route.params.id
				}
			}).then((res)=>{console.log(this.author=res.data.data)})
			request({
				url:'/simi/mv',
				params:{
					mvid:this.$route.params.id
				}
			}).then((res)=>{console.log(this.tjmv=res.data.mvs)})
			setTimeout(()=>{
				request({
					url:'artists',
					params:{
						id:this.author.artistId
					}
				}).then((res)=>{console.log(this.authorurl=res.data.artist.picUrl)})
			},1000)
			request({
				url:'/comment/mv',
				params:{
					id:this.$route.params.id,
					offset:0
				}
			}).then((res)=>{console.log(this.plsl=res.data)
				function timestampToTime(timestamp) {
				        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				       let Y = date.getFullYear() + '-';
				       let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';	
				       let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';		
				       let h = date.getHours() < 10 ? '0' + date.getHours()+ ':' : date.getHours() + ':';			
				       let m = date.getMinutes() < 10 ? '0' + date.getMinutes()+ ':' : date.getMinutes() + ':';		
				       let s = date.getSeconds();		
				        return Y+M+D+h+m+s;
				    }
				for (let s of this.plsl.hotComments) {
					s.time=timestampToTime(s.time)
				}
				for (let s of this.plsl.comments) {
					s.time=timestampToTime(s.time)
				}
			})
		}
	}
</script>

<style scoped="scoped">
	video{
		width: 100%;
		height: 24rem;
	}
	.ybf{
		margin-top: 1.5625rem;
		position: relative;
		left:16.875rem
	}
	.bfl span{
		padding-right: 10px;
	}
	.bfl{
		font-size: 12px;
		padding-bottom: 20px;
		color: #999999;
	}
	.newpl{
		margin-top: 60px;
	}
	.jc p{
		margin: 0px;
		font-weight: 700;
	}
	.content{
		padding-left: 6px;
	}
	.dz span{
		position: relative;
		bottom: 2px;
		left: 6px;
	}
	.dz{
		display: flex;
		justify-content: space-between;
	}
	.tp img{
		width: 100%;
		border-radius: 50%;
	}
	.tp{
		width: 50px;
		height: 50px;
	}
	.dzh p{
		margin: 3px 0px;
	}
	.dzh{
		width: 100%;
		margin-left: 15px;
		border-bottom: .6px #D3DCE6 solid;
	}
	.jc p{
		margin: 0px;
		font-weight: 700;
	}
	.hotpl{
		display: flex;
		font-size: 12px;
		padding-top: 30px;	
	}
	.tx img{
		width: 15%;
		border-radius: 50%;
	}
	.tx p{
		padding: 0px 20px;
	}
	.tx{
		align-items: center;
		display: flex;
		padding: 20px;
	}
	.bt{
		font-weight: 800;
	}
	.mvxx div{
		padding: 12px;
	}
	.mvxx{
		font-size: 12px;
		color: #999999;
	}
	.xgtj img{
		width: 200px;
		
		border-radius: 5px;
	}
	.xgtj{
		margin-left: 25px;
		cursor: pointer;
	}
	.tjmv{
		display: flex;
		padding: 5px;
	}
	.vid video,.xgtj{
		width: 100%;
	}
	.tj{
		display: flex;
		width: 62.5rem;
		
	}
</style>
