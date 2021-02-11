<template>
	<div style="overflow-y: hidden;">
		<toptab class="fl"><template v-slot:center>商品分类</template></toptab>
	<van-sidebar v-model="active" @change="onChange" style="margin-top: 40px;padding-bottom: 40px;">
	  <van-sidebar-item :title="value.title" v-for='(value,index) in data'/>
	</van-sidebar>
	<better style="height: 10px;">
		<div style="position: relative;right: -80px;top: -980px;width: 300px;margin-left: 20px;display: flex;flex-wrap: wrap;" >
			<div v-for="(value,index) in fl" style="width: 140px;margin-bottom: 10px;text-align: center;">
				<img :src="value.image" alt=""  style="width: 55%;margin-bottom: 10px;">
				<div>{{value.title}}</div>
			</div>
			
		</div>
	</better>
	</div>
</template>

<script>
import { ref } from 'vue'
import {request} from '@/router/request.js'
import toptab from '@/components/toptab'
import better from '@/components/better.vue'
export default {
  name: 'classify',
  components: {
    toptab,
	better
  },
  data(){
	  const active = ref(0);
	  const onChange = (index) => {
		  console.log(this.data[index].maitKey)
		  let a=this.data[index].maitKey
		  request({
			  url:'/subcategory',
			  params:{
				  maitKey:a
			  }
		  }).then((res)=>{this.fl=res.data.data.list})
		  };
	  return {
	    active,
	    onChange,
		data:{},
		fl:{}
	  }
	 
  },
  created() {
	  request({
	  	url:'/subcategory',
	  	params:{
	  	maitKey:3627
	 	}
	  }).then((res)=>{this.fl=res.data.data.list})
  	request({
		url:'/category'
	}).then((res)=>{this.data=res.data.data.category.list})
  }
}
</script>
<style>
	.fl{
		background-color: #FFC0CB;
		color: white;
	}
</style>
