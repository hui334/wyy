<template>
	<div class="ablock">
	   
	    <el-slider v-model="value3" :show-tooltip="false" @change="gn"></el-slider>
	  </div>
	<div class="bf">
					  <audio :src="$store.state.url" ref='aaa'></audio>
					  <div>
						  <span class="gq">{{$store.state.name}}</span>
						  <span v-show="oi" class="bfsc">{{sc? sc:''}}  /  {{ti? ti:''}}</span>
					  </div>
					  <div class="gn" @click.stop>
						  <img src="@/assets/YDUs.svg" alt="" @click="syq">
						  <img src="@/assets/zt.svg" alt="" v-show='isbf' @click="cw">
						  <img src="@/assets/bf.svg" alt="" @click="qw" v-show="cl">
						  <img src="@/assets/YDUIx.svg" alt="" @click="xyq">
					  </div>
					 <div class="bftitle" @click.stop>
						 <img src="@/assets/zk.svg" alt="">
						 <img src="@/assets/sq.svg" alt="">
						 <img src="@/assets/sy.svg" alt="" @click="sy">
						 <div class="block">
						    <el-slider v-model="value2" class="fv" @change='slidgb'></el-slider>
						  </div>
						  <img src="@/assets/QQ.svg" alt="" class="df" @click="qq">
						  <img src="@/assets/GitHub.svg" alt="" class="rv" @click="git">
					 </div>
					   
					<!-- <audio :src="$store.state.url" ref='aaa'></audio> -->
	</div>
</template>

<script>
	export default{
		name:'fo',
		components:{},
		methods:{
			sy(){
				this.sys=(!this.sys)
				if(this.sys==true){
					this.$refs.aaa.volume=this.value2/100
				}else{
					this.$refs.aaa.volume=0
				}
			},
			syq(){
				
				if(this.$store.state.index==0){
					return
				}else{
					this.$store.commit('syq')
					setTimeout(()=>{
						let a="https://music.163.com/song/media/outer/url?id="+this.$store.state.lb[this.$store.state.index].id+".mp3"
						let b=true
						this.$store.commit('gq',this.$store.state.lb[this.$store.state.index].name)
							this.$store.commit('gburl',a)
							this.$store.commit('gbbf',b)
					},500)
				}
				
			},
			xyq(){
				this.$store.commit('xyq')
				setTimeout(()=>{
					let a="https://music.163.com/song/media/outer/url?id="+this.$store.state.lb[this.$store.state.index].id+".mp3"
					let b=true
					this.$store.commit('gq',this.$store.state.lb[this.$store.state.index].name)
						this.$store.commit('gburl',a)
						this.$store.commit('gbbf',b)
				},500)
			},
			slidgb(){
				this.$refs.aaa.volume=this.value2/100
			},
			gn(index){
				this.$refs.aaa.currentTime = parseInt(index / 100 * this.$refs.aaa.duration)
			},
			cw(){
				//console.log('sc')
				this.cl=true
				this.isbf=false
				this.$refs.aaa.pause()
			},
			qw(){
				if(!this.isplay){
					return
				}
				this.isbf=true
				this.cl=false
				this.$refs.aaa.play()
				
				//console.log(this.$store.state.bf)
				
			},
			qq(){
				window.open("tencent://Message/?Uin=1767814588&websiteName=qzone.qq.com&Menu=yes")
			},
			git(){
				window.open("https://github.com/hui334/hui")
			},
		},
		watch:{
			/* '$store.state.index'(newval,oldval){
				console.log(this.$store.state.lb[this.$store.state.index])
			}, */
			'$store.state.bf'(newval,oldval){
				//console.log(newval)
				//console.log(oldval)
				if(newval==true){
					this.isplay=true
					setTimeout(()=>{
						if(this.$refs.aaa.error){
							this.$notify.info({
							          title: '消息',
							          message: '应合作方要求，该资源暂时下架'
							        });
							console.log('错误')
							return
						}
						this.isbf=true
						this.cl=false
						this.oi=true
						this.$refs.aaa.play()
						let a=Math.floor(this.$refs.aaa.duration%60)<10? '0'+Math.floor(this.$refs.aaa.duration%60):Math.floor(this.$refs.aaa.duration%60)
						this.sc='0'+Math.floor(this.$refs.aaa.duration/60).toFixed(0)+':'+a
					},500)
				}
			},
		},
		data(){
			return {
				value3:0,
				value2:50,
				isbf:false,
				cl:true,
				isplay:false,
				sc:'',
				ti:'',
				oi:false,
				sys:true
			}
		},
		mounted() {
			
			this.$refs.aaa.onended=()=>{
				this.$store.commit('bfwb')
				
				//console.log($store.state)
				setTimeout(()=>{
					let a="https://music.163.com/song/media/outer/url?id="+this.$store.state.lb[this.$store.state.index].id+".mp3"
					let b=true
					this.$store.commit('gq',this.$store.state.lb[this.$store.state.index].name)
						this.$store.commit('gburl',a)
						this.$store.commit('gbbf',b)
				},500)
			},
				
					
			
			setInterval(()=>{
				let value=this.$refs.aaa.currentTime
				let interval = parseInt(value)
				let minute = '0'+Math.floor(interval / 60).toFixed(0)
				let second = Math.floor(interval % 60)<10? '0'+Math.floor(interval % 60):Math.floor(interval % 60)
				this.ti=`${minute}:${second}`
				this.value3=parseInt(this.$refs.aaa.currentTime/this.$refs.aaa.duration*100)
			},1000)
		},
		
		
	}
</script>

<style scoped="scoped">
	.gq{
		position: relative;
		left: 50px;
		font-size: 12px;
		top: 20px;
	}
	.bfsc{
		position: relative;
		left: 140px;
		font-size: 12px;
		top: 20px;
	}
	.df,.rv{
		position: relative;
		right: 130px;
	}
	.fv{
		width: 120px;
		position: relative;
		top: 1rem;
	}
	.gn img:hover{
		cursor: pointer;
	}
	.gn{
		text-align: center;
		line-height: 5.55rem;
	}
	.bftitle img:hover{
		cursor: pointer;
	}
	.bftitle>>>.block{
		width: 200px;
	}
	.el-slider__button{
		width: 13px;
		height: 13px;
	}
	.bftitle{
		/* text-align: center; */
		display: flex;
		margin-left: 100px;
		/* justify-content: space-between; */
	}
	.bftitle img{
		width: 4%;
		margin: 0px 10px;
	}
	.bf div{
		flex: 1;
	}
	.bf{
		display: flex;
		height: 72px;
		position: fixed;
		bottom: 0rem;
		left: 0rem;
		right: 0rem;
		background-color: #fff;
		
	}
	.ablock{

		position: fixed;
		bottom: 56px;
		left: 0rem;
		right: 0rem;
		z-index: 999;
	}
</style>
