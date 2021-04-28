<template>
	<div>
		<div class="list">
			<div class="playtit">
				<img :src="listimg.coverImgUrl+'?params=400y400'" alt="">
			</div>
			<div class="ite">
				<p>{{listimg.name}}</p>
				<div class="sg">
					<img :src="ig.avatarUrl" alt="">
					<p>{{ig.nickname}}</p>
					<p>{{listimg.createTime}} 创建</p>
				</div>
				<div> <el-button type="primary" round @click='bfqb'>播放全部</el-button></div>
				<div class="jj">
					<p>标签:{{listimg.tags}}</p>
					<p>简介:{{listimg.description}}</p>
				</div>
			</div>
		</div>
		<div class="pl">
			<ul>
				<li @click="gq"><span :class="{xq:isgq}">歌曲列表</span></li>
				<li @click="pla"><span :class="{xq:ispl}">评论({{plsl.total}})</span></li>
			</ul>
		</div>
		<el-table :data="listsong" stripe class="bh" @row-click='tb' v-if='xs'>
			<el-table-column type="index">
			</el-table-column>
			<el-table-column width="80" prop="al.picUrl">
				<template #default='scope'>
					<el-image   :src="scope.row.al.picUrl" :lazy='true' :key='scope.row.al.picUrl' class="cb"></el-image>
				</template>
			</el-table-column>
			<el-table-column align="center" prop="name" label="音乐标题" width="250">
			</el-table-column>
			<el-table-column align="center" prop="ar[0].name" label="歌手" width="180">
			</el-table-column>
			<el-table-column align="center" prop="al.name" label="专辑">
			</el-table-column>
			<el-table-column align="center" prop="dt" label="时长">
			</el-table-column>
		</el-table>
		<div v-else class="plk">
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
			<div class="ekj"><el-pagination
			  background
			  layout="prev, pager, next"
			  :total="plsl.total/20*10"
			  @current-change='sb'
			  @click="openFullScreen2"
			  >
			</el-pagination></div>
		</div>
		
	</div>
</template>

<script>
	import {
		request
	} from '@/router/request.js'
	export default {
		name: 'lists',
		data() {
			return {
				listimg: '',
				ig: '',
				ids:'',
				listsong:[],
				isgq:true,
				ispl:false,
				plsl:'',
				xs:true
			}
		},
		components: {},
		methods:{
			tb(index){
				console.log(index)
				let a="https://music.163.com/song/media/outer/url?id="+index.id+".mp3"
				let b=true
				let c=this.listsong.findIndex((value)=>{
					return value.id==index.id
				})
				console.log(c)
				this.$store.commit('lb',this.listsong)
				this.$store.commit('sy',c)
				this.$store.commit('gq',index.name)
				this.$store.commit('gburl',a)
				this.$store.commit('gbbf',b)
			},
			bfqb(){
				let a="https://music.163.com/song/media/outer/url?id="+this.listsong[0].id+".mp3"
				let b=true
				this.$store.commit('lb',this.listsong)
				this.$store.commit('sy',0)
				this.$store.commit('gq',this.listsong[0].name)
					this.$store.commit('gburl',a)
					this.$store.commit('gbbf',b)
			},
			sb(index){
				request({
					url:'/comment/playlist',
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
				window.scroll(0,0)
			},
			gq(){
				this.isgq=true
				this.ispl=false
				this.xs=true
			},
			pla(){
				this.isgq=false
				this.ispl=true
				this.xs=false
			}
		},
		created() {
			request({
				url:'/comment/playlist',
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

			request({
				url: '/playlist/detail',
				params: {
					id: this.$route.params.id
				}
			}).then((res) => {
				console.log(this.listimg = res.data.playlist)
				console.log(this.ig = this.listimg.creator)
				if(this.listimg.trackIds.length>300){
					console.log('大于')
					let sl=this.listimg.trackIds.slice(0,300)
					this.ids=sl.map((value)=>value.id).join(',')
				}else{
					console.log('小于')
					this.ids=this.listimg.trackIds.map((value)=>value.id).join(',')
				}
				
				//this.ids=this.listimg.trackIds.map((value)=>value.id).join(',')
				function timestampToTime(timestamp) {
					let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000			
					let Y = date.getFullYear() + '-';
					let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
					let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';
					return Y + M + D;
				}
				this.listimg.createTime = timestampToTime(this.listimg.createTime)
				this.listimg.tags = this.listimg.tags.join('/')
			})
			setTimeout(()=>{
				request({
					url: '/song/detail',
					params: {
						ids: this.ids
					}
				}).then((res)=>{console.log(this.listsong=res.data.songs)
						for (let s of this.listsong) {
							let a=parseInt(s.dt/1000%60)
							let b=parseInt(s.dt/1000/60%60)
							a<10? a='0'+a:a,
							b>10? b:b="0"+b
							s.dt=b+':'+a
						}
				})
			},500)
			
		}
	}
</script>

<style scoped="scoped">
	.ekj{
		margin-top: 1.5625rem;
		position: relative;
		left:50.875rem
	}
	.cb{
		width: 100%;
	}
	.bh{
		width: 100%;
		font-size: 12px;
	}
	.jj p:nth-child(2){
		/* overflow: hidden;
		height: 50px;
		text-overflow: ellipsis; */

		display: -webkit-box;
		height:50px;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.ite{
		font-size: 12px;
		width: 1200px;
		margin-left: 20px;
	}
	.plk{
		margin-left: 30px;
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
	.dzh p{
		margin: 3px 0px;
	}
	.dzh{
		width: 100%;
		margin-left: 15px;
		border-bottom: .6px #D3DCE6 solid;
	}
	.hotpl{
		display: flex;
		font-size: 12px;
		padding-top: 30px;	
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
	.xq{
		border-bottom: 2px #FF0000 solid;
	}
	.pl ul{
		padding: 0px;
	}
	.pl li{
		list-style: none;
		padding-right: 35px;
		cursor: pointer;
	}
	.sg p {
		margin-left: 15px;
	}
	.list,.sg,.pl ul{
		display: flex;
	}

	.sg img {
		width: 17%;
		height: 17%;
		border-radius: 50%;
	}

	.sg {
		width: 32%;
		padding-bottom: 10px;
	}

	.playtit img {
		width: 100%;
		/* margin-top: 24px; */
	}

	.playtit {
		width: 22%;
	}
</style>
