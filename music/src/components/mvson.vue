<template>
	<div class="son">
		<div class="area">
			<span>地区:</span>
			<ul>
				<li v-for="(value,index) in areas"><span @click="arecli(index)" :class="{ar:areacur==index}">{{value}}</span></li>
			</ul>
		</div>
		<div class="type">
			<span>类型:</span>
			<ul>
				<li v-for="(value,index) in types"><span @click="typecli(index)" :class="{ar:typecur==index}">{{value}}</span></li>
			</ul>
		</div>
		<div class="order">
			<span>排序:</span>
			<ul>
				<li v-for="(value,index) in orders"><span @click="ordercli(index)" :class="{ty:ordercur==index}">{{value}}</span></li>
			</ul>
		</div>
		<div class="newmv">
			<div v-for="(value,index) in newmv" :key='index' class="mvson" @click="djmv(index)">
				<img :src="value.cover" alt=""  :key='index'>
				<div class="sj">{{value.duration}}</div>
				<div class="cl">
					<p>{{value.name}}</p>
					<p>{{value.artistName}}</p>
				</div>
			</div>
		</div>
		<div class="dbn"><el-pagination
		  background
		  layout="prev, pager, next"
		  :total="pages/40*10"
		  @current-change='sb'

		  >
		</el-pagination></div>
	</div>
</template>

<script>
	import {request} from '@/router/request.js'
	export  default{
		name:'mvson',
		data(){
			return{
				aready:'全部',
				typedy:'全部',
				order:'上升最快',
				ym:0,
				pages:0,
				areacur:0,
				typecur:0,
				ordercur:0,
				newmv:'',
				areas:["全部", "内地", "港台", "欧美", "日本", "韩国"],
				types:["全部", "官方版", "原声", "现场版", "网易出品"],
				orders:["上升最快", "最热", "最新"]
			}
		},
		components:{
			
		},
		methods:{
			djmv(index){
				this.$router.push('/mvs/'+this.newmv[index].id)
			},
			arecli(index){
				this.areacur=index
				this.aready=this.areas[index]
				request({
					url:"/mv/all",
					params:{
						limit:40,
						area:this.aready,
						type:this.typedy,
						oder:this.orderdy,
						offset:(this.ym-1)*40
					}
				}).then((res)=>{console.log(this.newmv=res.data.data)
				for (let s of this.newmv) {
					let a=parseInt(s.duration/1000%60)
					let b=parseInt(s.duration/1000/60%60)
					a<10? a='0'+a:a,
					b>10? b:b="0"+b
					s.duration=b+':'+a
				}
				})
			},
			typecli(index){
				this.typecur=index
				this.typedy=this.types[index]
				request({
					url:"/mv/all",
					params:{
						limit:40,
						area:this.aready,
						type:this.typedy,
						oder:this.orderdy,
						offset:(this.ym-1)*40
					}
				}).then((res)=>{console.log(this.newmv=res.data.data)
				for (let s of this.newmv) {
					let a=parseInt(s.duration/1000%60)
					let b=parseInt(s.duration/1000/60%60)
					a<10? a='0'+a:a,
					b>10? b:b="0"+b
					s.duration=b+':'+a
				}
				})
			},
			ordercli(index){
				this.ordercur=index
				this.orderdy=this.orders[index]
				request({
					url:"/mv/all",
					params:{
						area:this.aready,
						type:this.typedy,
						oder:this.orderdy,
						offset:(this.ym-1)*40
					}
				}).then((res)=>{console.log(this.newmv=res.data.data)
				for (let s of this.newmv) {
					let a=parseInt(s.duration/1000%60)
					let b=parseInt(s.duration/1000/60%60)
					a<10? a='0'+a:a,
					b>10? b:b="0"+b
					s.duration=b+':'+a
				}
				})
			},
			sb(index){
				this.ym=index
				console.log(index)
				request({
					url:"/mv/all",
					params:{
						limit:40,
						area:this.aready,
						type:this.typedy,
						oder:this.orderdy,
						offset:(this.ym-1)*40
					}
				}).then((res)=>{console.log(this.newmv=res.data.data)
				for (let s of this.newmv) {
					let a=parseInt(s.duration/1000%60)
					let b=parseInt(s.duration/1000/60%60)
					a<10? a='0'+a:a,
					b>10? b:b="0"+b
					s.duration=b+':'+a
				}
				})
				setTimeout(() => {
				  window.scroll(0,0);
				}, 500);
			}
		},
		created() {
			request({
				url:'/mv/all',
				params:{
					limit:40,
					area:'全部',
					type:'全部',
					oder:'上升最快'
				}
			}).then((res)=>{console.log(this.newmv=res.data.data)
			this.pages=res.data.count
					for (let s of this.newmv) {
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
	.dbn{
		margin-top: 1.5625rem;
		position: relative;
		left:28.875rem;
	}
	.ar,.or,.ty{
		background-color: pink;
		border-radius: 5px;
	}
	.sj{
		font-size: 12px;
		position: absolute;
		bottom: 67px;
		color: #fff;
		right: 15px;
	}
	.son{
		margin-left: 200px;
	}
	.cl p:nth-child(2){
		opacity: .6;
	}
	.mvson p{
		padding: 5px;
		margin: 0px;
		white-space: nowrap;
		overflow: hidden;
		font-size: 12px;
	}
/* 	.mvson span{
		position: relative;
		left: 250px;
		bottom: 160px;
		text-align: right;
		color: red;
	} */
	.mvson img{
		width: 100%;
		border-radius: 10px;
	}
	.mvson{
		position: relative;
		width: 19%;
		padding: 10px 10px;
		cursor: pointer;
	}
	.newmv{
		display: flex;
		flex-wrap: wrap;
		margin:0px auto;
	}
	.area ul li:last-child,.type ul li:last-child,.order ul li:last-child{
		border-right: 0px #E7E7E7 solid;
	}
	.type li:nth-child(even),.order li:nth-child(even),.area li:nth-child(even){
		border-left: 1px #999999 solid;
		border-right: 1px #999999 solid;
	}
	.area,.type,.order{
		display: flex;
		font-size: 12px;
		margin-left: 20px;
	}
	.area ul,.type ul,.order ul{
		display: flex;
		padding: 0px;
	}
	.type span,.order span,.area span{
		line-height: 52px;
	}
	.type li,.order li,.area li{
		list-style: none;
		padding: 0 18px;
		height: 28px;
		cursor: pointer;
	}
	.type li span,.order li span,.area li span{
		line-height: 28px;
	}
</style>
