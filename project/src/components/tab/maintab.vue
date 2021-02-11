<template>
	<div class="maintab">
		<buttom>
				 <buttomtab path='/homepage'>
				 	<template v-slot:qw><img src="@/assets/tabbar/home.svg" alt=""></template>
				 	<template v-slot:as><img src="@/assets/tabbar/home_active.svg" alt=""></template>
				 	<template v-slot:zx><div>首页</div></template>
				 </buttomtab>
				 <buttomtab path='/classify'>
				 	<template v-slot:qw><img src="@/assets/tabbar/category.svg" alt=""></template>
				 	<template v-slot:as><img src="@/assets/tabbar/category_active.svg" alt=""></template>
				 	<template v-slot:zx><div>分类</div></template>
				 </buttomtab>
				 <buttomtab path='/shopcart'>
				 	<template v-slot:qw><img src="@/assets/tabbar/shopcart.svg" alt=""></template>
				 	<template v-slot:as><img src="@/assets/tabbar/shopcart_active.svg" alt=""></template>
				 	<template v-slot:zx><div>购物车</div></template>
				 </buttomtab>
				 <buttomtab path='/my'>
				 	<template v-slot:qw><img src="@/assets/tabbar/profile.svg" alt=""></template>
				 	<template v-slot:as><img src="@/assets/tabbar/profile_active.svg" alt=""></template>
				 	<template v-slot:zx><div>我的</div></template>
				 </buttomtab>
		</buttom>
	</div>
</template>

<script>
	import buttom from '@/components/tab/buttom.vue'
	import buttomtab from '@/components/tab/buttomtab.vue'
	export default{
		name:'maintab',
		components:{
			buttom,
			buttomtab
		}
	}
</script>

<style>
	
</style>
