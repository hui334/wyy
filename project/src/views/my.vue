<template>
	<div>
		<toptab class="dn">
			<template v-slot:center><div>我的档案</div></template>
		</toptab>
		<div class="er">
			<img src="@/assets/profile/avatar.svg" alt="" style="width: 20%;margin-left: 20px;position: relative;bottom: -15px;">
			<div class="ui">
				<span>登录/注册</span>
				<div style="font-size: 10px;"><img src="@/assets/profile/phone.svg" alt="" style="width: 15%;position: relative;bottom: -2px;">暂无绑定手机号</div>
				<img src="@/assets/back.svg" alt="" class="jt">
			</div>
		</div>
		<div class="qs">
			<div style="border-right: 2px solid #F0F8FF;"><p>0.00元</p>我的余额</div>
			<div style="border-right: 2px solid #F0F8FF;"><p>0个</p>我的优惠</div>
			<div><p>0分</p>我的积分</div>
		</div>
		<div class="kl">
			<div><img src="@/assets/profile/message.svg" alt="">&nbsp;&nbsp;<span>我的消息</span></div>
			<div><img src="@/assets/profile/pointer.svg" alt="">&nbsp;&nbsp;<span>积分商城</span></div>
			<div><img src="@/assets/profile/vip.svg" alt="">&nbsp;&nbsp;<span>会员卡</span></div>
		</div>
		<div class="ok">
			<div><img src="@/assets/profile/cart.svg" alt="">&nbsp;&nbsp;<span>我的购物车</span></div>
			<div><img src="@/assets/profile/shopping.svg" alt="">&nbsp;&nbsp;<span>下载购物App</span></div>
		</div>
	</div>
</template>

<script>
	import toptab from '@/components/toptab'
	export default{
		name:'my',
		components:{
			toptab
		}
	}
</script>

<style>
	.ok div{
		height: 40px;
		line-height: 40px;
		border-bottom:2px solid #F0F8FF ;
		
	}
	.ok{
		border-top: 15px solid #F0F8FF;
	}
	.ok img{
		width: 5%;
	}
	.kl div{
		height: 40px;
		line-height: 40px;
		border-bottom:2px solid #F0F8FF ;
		
	}
	.kl{
		border-top: 15px solid #F0F8FF;
	}
	.kl img{
		width: 5%;
	}
	.qs div{
		flex: 1;
		text-align: center;
	}
	.qs{
		display: flex;
		padding-bottom: 10px;
	}
	.ui{
		display: inline-block;
		margin-left: 10px;
		margin-bottom: 60px;
		text-align: center;
		width: 100px;
	}
	.jt{
		transform: rotate(180deg);
		position: fixed;
		right: 15px;
		top: 80px;
	}
	.er{
		margin-top: 40px;
		background-color: #FFC0CB;
	}
	.dn{
		background-color: #FFC0CB;
		color: white;
	}
</style>
