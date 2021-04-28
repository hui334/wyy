<template>
	<div >
		<ul class="tit">
			<li v-for="(value,index) in tit" @click="cltit(index)" :class="{titsl:index==cur}">{{value}}</li>
		</ul>
		<el-table
		   :data="songs"
		   stripe
		   class="tv"
			@row-click='tb'
			:show-header='false'
			:cell-style="{fontSize:'12px'}">
		<el-table-column
			type="index">
		</el-table-column>
		<el-table-column
			 width="80"
			 prop="album.blurPicUrl"
			 >
			
			<template  #default="scope">
				<el-image   :src="scope.row.album.blurPicUrl" :lazy='true' :key='scope.row.album.blurPicUrl' style="width: 100%;"></el-image>
				<!-- <img :src="scope.row.album.blurPicUrl" alt="" style="width: 100%;"> -->
			</template>
		</el-table-column>
		 <el-table-column
			align="center"
		     prop="name"
		     width="250">
		</el-table-column>
		<el-table-column
			align="center"
		    prop="artists[0].name"
		    width="180">
		</el-table-column>
		<el-table-column
			align="center"
		    prop="album.name"
			width="180">
		</el-table-column>
		<el-table-column
			align="center"
			prop="duration"
			width="180"> 
		</el-table-column>
		 </el-table>
	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export default{
		name:'songs',
		data(){
			return{
				songs:[],
				cur:0,
				songtype:0,
				tit:['全部','华语','欧美','日本','韩国']
			}
		},
		methods:{
			tb(index){
				let a="https://music.163.com/song/media/outer/url?id="+index.id+".mp3"
				let b=true
				let c=this.songs.findIndex((value)=>{
					return value.id==index.id
				})
				console.log(c)
				this.$store.commit('gq',index.name)
				this.$store.commit('lb',this.songs)
				this.$store.commit('sy',c)
					this.$store.commit('gburl',a)
					this.$store.commit('gbbf',b)
			},
			cltit(index){
				this.cur=index
				if(index==0){
					this.songtype=0
				}else if(index==1){
					this.songtype=7
				}else if(index==2){
					this.songtype=96
				}else if(index==3){
					this.songtype=8
				}else{
					this.songtype=16
				}

				request({
					url:'/top/song',
					params:{
						type:this.songtype
					}
				}).then((res)=>{console.log(this.songs=res.data.data)})
				
				console.log(index)
			}
		},
		components:{
			
		},
		created() {
			
			request({
				url:'/top/song',
				params:{
					type:0
				}
			}).then((res)=>{console.log(this.songs=res.data.data)
				for (let s of this.songs) {
					let a=parseInt(s.duration/1000%60)
					let b=parseInt(s.duration/1000/60%60)
					a<10? a='0'+a:a,
					b>10? b:b="0"+b
					s.duration=b+':'+a
				}
			})
		}
	}
</script>

<style scoped="scoped">
	.tv{
		width: 80%;
		margin-left: 200px;
	}
	.titsl{
		color: pink !important;
	}
	.tit{
		display: flex;
		justify-content: flex-end;
		list-style: none;
	}
	.tit li{
		padding: 0px 10px;
		font-size: 0.8rem;
		cursor: pointer;
		color: #99A9BF;
		margin-right: 25px;
	}
</style>
