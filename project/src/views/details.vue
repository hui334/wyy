<template>
	<div class="details">
		<toptab class="top">
			<template v-slot:left><img src="@/assets/back.svg" alt="" @click="back"></template>
			<template v-slot:center>
				<div class="title">
					<div v-for="(value,index) in title" @click="cli(index)" :class="{qw:key==index}">{{value}}</div>
				</div>
			</template>
		</toptab>
		<better class="nav" ref='better' @show='is'>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :stop-propagation="false">
			  <van-swipe-item v-for="value in image"><a href=""><img :src="value" alt=""></a></van-swipe-item>
			</van-swipe>
			<detailbase :sj='base'></detailbase>
			<shopstore :sh='shop'></shopstore>
			<goods :goodsimage='goodsimage'></goods>
			<parameter :cm='tb' :cs='cs' ref='para'></parameter>
			<pl :pl='pl' :pla='pla' ref='pl'></pl>
			<items :goods='go' ref='it'></items>
			
		</better>
		<van-action-bar>
		  <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
		  <van-action-bar-icon icon="cart-o" text="购物车" />
		  <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
		  <van-action-bar-button type="warning" text="加入购物车"  @click='gw'/>
		  <van-action-bar-button type="danger" text="立即购买" />
		</van-action-bar>	
		
	</div>
	
</template>

<script>
	import toptab from '@/components/toptab.vue'
	import {request,Goods} from '@/router/request.js'
	import detailbase from '@/components/detailbase.vue'
	import better from '@/components/better.vue'
	import shopstore from '@/components/shopstore.vue'
	import goods from '@/components/goods.vue'
	import parameter from '@/components/parameter.vue'
	import pl from '@/components/pl.vue'
	import items from '@/components/items.vue' 
	export default{
		name:'details',
		components:{
			toptab,
			detailbase,
			better,
			shopstore,
			goods,
			parameter,
			pl,
			items
		},
		data(){
			return {
				title:['商品','参数','评论','推荐'],
				key:0,
				id:'',
				image:[],
				base:{},
				shop:{},
				goodsimage:{},
				tb:{},
				cs:{},
				pl:{},
				pla:{},
				go:{},
				jl:[0],
			}
		},
		methods:{
			cli(index){
				if(index==0){
					this.$refs.better.scroll.scrollTo(0,0,500)
				}else if(index==1){
					this.$refs.better.scroll.scrollTo(0,-this.jl[1],500)
				}else if(index==2){
					this.$refs.better.scroll.scrollTo(0,-this.jl[2],500)
				}else if(index==3){
					this.$refs.better.scroll.scrollTo(0,-this.jl[3],500)
				}
				
				this.key=index
			},
			back(){
				this.$router.back()
			},
			is(position){
				if(/* -position.y>0&& */-position.y<4730){
					this.key=0
				}else if(-position.y>4730&&-position.y<5658){
					this.key=1
				}else if(-position.y>5658&&-position.y<5841){
					this.key=2
				}else{
					this.key=3
				}
			},
			gw(){
				let pro={}
				pro.image=this.image[0]
				pro.title=this.base.title
				pro.desc=this.base.desc
				pro.relprice=this.base.realprice
				pro.id=this.id
				pro.num=1
				pro.ch=false
				console.log(pro)
				/* this.$store.commit('addcart',pro)
				console.log(this.$store.state.cart) */
				this.$store.state.cart.push(pro)
				this.$toast('添加成功')
				function hui (){
					let data=sessionStorage.getItem("sj")
					if(data!=null){
						return JSON.parse(data)
					}else{
						return []
					}
				}		
				let a=hui()
				a.push(pro)
				/* let data=sessionStorage.getItem("sj")
				this.data.push(pro) */
				sessionStorage.setItem('sj',JSON.stringify(a))
			}
		},
		created() {
			this.id=this.$route.params.iid
			request({
				url:'/detail',
				params:{
					iid:this.id
				}
			}).then((res)=>{
				console.log(res.data.result.itemInfo)
				let a=res.data.result
				this.image=res.data.result.itemInfo.topImages
				this.shop=a.shopInfo
				this.goodsimage=a.detailInfo
				this.tb=a.itemParams.rule.tables[0]
				this.cs=a.itemParams.info.set
				this.pl=a.rate.list[0]
				this.pla=a.rate.list[0].user
				this.base=new Goods(a.itemInfo,a.columns,a.shopInfo.services)
				console.log(a)
				})
				
				request({
					url:'/recommend'
				}).then((res)=>{this.go=res.data.data.list})
				
		},
		mounted() {
			setTimeout(()=>{
				this.jl.push(this.$refs.para.$el.offsetTop-45)
				this.jl.push(this.$refs.pl.$el.offsetTop-40)
				this.jl.push(this.$refs.it.$el.offsetTop-63)
			},500)
			
		}
	}
</script>

<style>
	.top{
		background-color: #fff ;
	}
	.nav{
		height:calc(100%) ;
		overflow: hidden;
	}
	.details{
		background-color: white;
		height: 100vh;
		border-bottom: 2px solid #F0F8FF;
		
	}
	.details img{
		width: 25%;
	}
	.title{
		display: flex;
	}
	.title div{
		flex: 5px;
		font-size: 14px;
	}
	.qw{
		color: #FFC0CB;
	}
	.my-swipe .van-swipe-item {
		margin-top: 40px;
	   color: #fff;
	   font-size: 20px;
	   line-height: 150px;
	   text-align: center;
			height: 350px;
			width: 320px;
	   background-color: #39a9ed;
	 }
	 .van-swipe-item img{
			  width:375px;
			  height: 350px;
	 }
</style>
