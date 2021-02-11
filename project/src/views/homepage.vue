<template>
	<div class="homepage">
		<toptab class="toptab"><template v-slot:center>购物街</template></toptab>
		<centertab2 v-show='bul' ref='aaa' @bt='qwe' ></centertab2>
		<better class="awrapper" ref='better' @show='ishow' @pullingUp='loadmore'>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false" ref='cnm'>
			  <van-swipe-item v-for="value in banner"><a :href="value.link"><img :src="value.image" alt=""></a></van-swipe-item>
			</van-swipe>
			<recommend :recommend='recommend'></recommend>
			<popular></popular>
			<centertab @btcli='zxc' ref='centertab2' v-show="zx"></centertab>
			<item :goods='goods[index].list' ></item>
			
		</better>
		<backtop v-show="isshow" @click.native='btn'></backtop>
	</div>
	
	
</template>

<script>
		import toptab from '@/components/toptab'
		import {request} from '@/router/request.js'
		import recommend from '@/components/recommend.vue'
		import popular from '@/components/popular.vue'
		import centertab from '@/components/centertab1.vue'
		import item from '@/components/item.vue'
		import backtop from '@/components/backtop.vue'
		import better from '@/components/better.vue'
		import centertab2 from '@/components/centertab2.vue'
	export default{
		name:'homepage',
		components:{
			toptab,
			recommend,
			popular,
			centertab,
			item,
			backtop,
			better,
			centertab2
		},
		
		data(){
			return{
				banner:[],
				recommend:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				index:'pop',
				isshow:false,
				bul:false,
				top:0,
				zx:true
				
			}
		},
		methods:{
			qwe(name){
				if(name==0){
					this.index='pop'
				}else if(name==1){
					this.index='new'
				}else{
					this.index='sell'
				}
				console.log(name)
				this.$refs.centertab2.active=name
			},
			zxc(name){
				if(name==0){
					this.index='pop'
				}else if(name==1){
					this.index='new'
				}else{
					this.index='sell'
				}
				this.$refs.aaa.active=name
				this.$refs.centertab2.active=this.$refs.aaa.active
			},
			btn(){
				this.$refs.better.scroll.scrollTo(0,0,500)
			},
			ishow(position){
				if(-position.y>1000){
					this.isshow=true
				}else{
					this.isshow=false
				}
				
				if(-position.y>this.top-44){
					this.bul=true
					this.zx=false
				}else{
					this.bul=false
					this.zx=true
				}
				this.$refs.aaa.$refs.bbb.resize()
				this.$refs.centertab2.$refs.ccc.resize()
			},
			//将数据请求再进行一次封装
			getrequest(type){
				let page=this.goods[type].page+1
				request({
					url:'/home/data',
					params:{
						type,
						page
					}					
				}).then(res=>{//console.log(res)				
				this.goods[type].list.push(...res.data.data.list)
				this.goods[type].page+=1
				this.$refs.better.scroll.finishPullUp()
				})
			},
			loadmore(){
				this.getrequest(this.index)
			}
		},
		mounted() {
			setTimeout(()=>{
				this.top=this.$refs.centertab2.$el.offsetTop
			},500)
				
			
			
		},
		created() {
			request({
				url:'/home/multidata'
			}).then((res)=>{this.banner=res.data.data.banner.list
			this.recommend=res.data.data.recommend.list
			})
			this.getrequest('pop')
			this.getrequest('new')
			this.getrequest('sell')
		}
	}
</script>

<style scoped>
	.awrapper{
		height: calc(100% - 83px);
		overflow: hidden;
		/* margin-top: 40px; */
	}
	.homepage{
		/* margin-top: 40px; */
		height: 100vh;
	}
	.toptab{
		background-color: #FFC0CB;
		height: 40px;
		color: white;
		position: relative;
	}
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
		height: 180px;
		width: 320px;
	    background-color: #39a9ed;
	  }
	  .van-swipe-item img{
		  width:100%;
		  height: 100%;
	  }
</style>
