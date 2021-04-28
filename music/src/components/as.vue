<template>
	<div>
		<ul class="cb">
			<li><div class="zx">
			 <i class="el-icon-house" @click="home"></i>
			 <i class="el-icon-switch-button" @click="sx"></i>
			 <i class="el-icon-full-screen" @click="qp"></i>
		 </div></li>
			<div @click="tcdl"><img class="user-img" :src="user? user.avatarUrl:''" alt=""><div>{{user?user.nickname:''}}</div></div>
			<li @click="dialogVisible=true" v-show='is'><i class="el-icon-user-solid"></i>未登录</li>
			<li @click="sy" :class="{as:sycur}"><svg t="1613460700471" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10926" width="16" height="16"><path d="M0 0v1024h839.68V839.68h184.32V0H0z" fill="#F45D5D" p-id="10927"></path><path d="M839.68 1024V839.68h184.32L839.68 1024z" fill="#EA4747" p-id="10928"></path><path d="M482.3552 455.68a115.2 115.2 0 1 1-115.2 115.2 115.328 115.328 0 0 1 115.2-115.2m0-76.8a192 192 0 1 0 192 192 192 192 0 0 0-192-192z" fill="#FFEBEB" p-id="10929"></path><path d="M488.73728 251.24736l72.16896-26.26688 102.1312 280.6016-72.16896 26.26816z" fill="#FFEBEB" p-id="10930"></path><path d="M538.176 387.0848l52.6848 144.768L663.04 505.6a192.4992 192.4992 0 0 0-124.864-118.5152z" fill="#FFFFFF" p-id="10931"></path><path d="M733.6448 271.36l-19.8784 74.176-211.5584-57.28-13.4784-37.0176 71.8208-26.2656L733.6448 271.36z" fill="#FFEBEB" p-id="10932"></path><path d="M592.8704 312.8064l-31.9232-87.7184-0.192-0.0512-72.0256 26.2016 13.4784 37.0176 90.6624 24.5504z" fill="#FFFFFF" p-id="10933"></path></svg>
			发现网抑
			</li>
			<li @click="discover" :class="{as:discovercur}"><svg t="1613460584942" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6822" width="16" height="16"><path d="M964.608 234.496c-46.08-52.565333-104.789333-93.696-169.642667-118.784a34.030933 34.030933 0 0 0-46.421333 31.744v420.352a178.005333 178.005333 0 0 0-110.933333-38.741333c-98.816 0-179.2 80.384-179.2 179.2S538.794667 887.466667 637.610667 887.466667s179.2-80.384 179.2-179.2c0-1.877333-0.170667-3.754667-0.341334-5.632 0-1.024 0.341333-1.877333 0.341334-2.901334V201.216c36.181333 20.309333 69.12 46.933333 96.597333 78.165333 12.458667 14.165333 34.133333 15.530667 48.128 3.072 14.165333-12.288 15.530667-33.792 3.072-47.957333zM637.610667 819.2c-61.098667 0-110.933333-49.834667-110.933334-110.933333s49.834667-110.933333 110.933334-110.933334 110.933333 49.834667 110.933333 110.933334-49.834667 110.933333-110.933333 110.933333zM185.344 307.2h392.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133334h-392.533333a34.133333 34.133333 0 1 0 0 68.266667zM424.277333 460.8h-238.933333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133334h238.933333c18.773333 0 34.133333-15.36 34.133334-34.133334s-15.36-34.133333-34.133334-34.133333zM321.877333 682.666667h-136.533333c-18.773333 0-34.133333 15.36-34.133333 34.133333s15.36 34.133333 34.133333 34.133333h136.533333c18.773333 0 34.133333-15.36 34.133334-34.133333s-15.36-34.133333-34.133334-34.133333z" p-id="6823"></path></svg>
			推荐歌单
			</li>
			<li @click="songs" :class="{as:songscur}"><svg t="1613460410048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4389" width="16" height="16"><path d="M929.2 94.8 363 94.8l-29.8 0 0 29.8 0 566.476c-27.181-36.289-70.382-59.877-119.2-59.877-82.285 0-149 66.717-149 149 0 82.285 66.715 149 149 149s149-66.715 149-149L363 124.6l566.2 0 0 491.976c-27.181-36.289-70.382-59.877-119.2-59.877-82.284 0-149 66.717-149 149 0 82.285 66.716 149 149 149 82.285 0 149-66.715 149-149L959 94.8 929.2 94.8zM214 899.4c-65.726 0-119.2-53.475-119.2-119.201C94.8 714.475 148.274 661 214 661c65.726 0 119.2 53.475 119.2 119.199C333.2 845.926 279.726 899.4 214 899.4zM810 824.9c-65.726 0-119.199-53.475-119.199-119.201 0-65.725 53.474-119.199 119.199-119.199s119.2 53.475 119.2 119.199C929.2 771.426 875.726 824.9 810 824.9z" p-id="4390" fill="#2c2c2c"></path></svg>
			最新音乐
			</li>
			<li @click="mv" :class="{as:mvcur}"><i class="el-icon-video-play"></i>最新MV</li>
			
		</ul>
		<el-dialog
		  title="提示"
		  v-model="dialogVisible"
		  width="30%"
		  >
		  <form action="">
			  账号：<input type="text" placeholder="请输入手机号" v-model="zh"><br>
			  密码：<input type="password" v-model="mm" placeholder="请输入密码">
		  </form>
		      <el-button @click="dialogVisible = false">取 消</el-button>
		      <el-button type="primary" @click="dl">确 定</el-button>
		</el-dialog>
	</div>
</template>

<script>
	import {
		request
	} from '@/router/request.js'
	export default{
		name:'as',
		props:{
			sycur:null,
			discovercur:null,
			songscur:null,
			mvcur:null,
		},
		data(){
			return{
				dialogVisible:false,
				/* sycur:true */
				zh:'13975972132',
				mm:'qwertasdf123',
				user:'',
				is:true
			}
		},
		components:{},
		methods:{
			dl(){
				request({
					url:'/login/cellphone',
					params:{
						phone:this.zh,
						password:this.mm
					}
				}).then((res)=>{
					//console.log(this.user=res.data.profile)
					window.sessionStorage.setItem("user",JSON.stringify(res.data.profile))
					this.user=JSON.parse(window.sessionStorage.getItem('user'))
				})
				
				this.dialogVisible=false
			},
			home(){
					  this.$router.push('/home')
			},
			qp(){
					   var el = document.documentElement;
					      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
					  
					      //typeof rfs != "undefined" && rfs
					      if (rfs) {
					          rfs.call(el);
					      }
					      else if (typeof window.ActiveXObject !== "undefined") {
					          //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
					          var wscript = new ActiveXObject("WScript.Shell");
					          if (wscript != null) {
					              wscript.SendKeys("{F11}");
					          }
					      }
			},
			sx(){
					   var el = document;
					      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;
					  
					      //typeof cfs != "undefined" && cfs
					      if (cfs) {
					          cfs.call(el);
					      }
					      else if (typeof window.ActiveXObject !== "undefined") {
					          //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
					          var wscript = new ActiveXObject("WScript.Shell");
					          if (wscript != null) {
					              wscript.SendKeys("{F11}");
					          }
					      }
			},
			discover(){
				this.$router.push("/discover")
			},
			songs(){
				this.$router.push("/songs")
			},
			sy(){
				this.$router.push("/home")
			},
			mv(){
				this.$router.push("/mv")
			},
			tcdl(){
				 this.$confirm('确定退出登录吗?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            type: 'success',
				            message: '退出成功!'
				          });
						  window.sessionStorage.removeItem('user')
						  this.user=''
						  this.is=true
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消'
				          });
				        });
			}
		},
		created() {
			let user=JSON.parse(window.sessionStorage.getItem('user'))
			if(user){
				this.user=JSON.parse(window.sessionStorage.getItem('user'))
			}
		},
		watch:{
			'user'(newval,oldval){
				if(newval){
					this.is=false
				}
			}
		}
	}
</script>

<style scoped="scoped">
	
	.user-img{
		width: 50%;
		border-radius: 50%;
	}
	.as{
		color: pink;
	}
	.zx i:hover{
		cursor: pointer;
	}
	.zx i{
		padding: 0px 10px;
	}
	.cb li:hover{
		background-color:#e7e7e7 ;
		cursor: pointer;
	}
	.cb li{
		height: 3.75rem;
		line-height: 3.75rem;
	}
	.cb{
		display: flex;
		flex-direction: column;
		list-style: none;
		position: fixed;
		left: 0rem;
		top: 0rem;
		width: 12.5rem;
		height: 100%;
		background-color: #ededed;
		padding: 0rem;
		padding-right: 8px;
		margin: 0rem;
	}
</style>
