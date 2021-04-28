<template>
	<div class="search">
	   <el-container>
	      <el-aside width="12.5rem">
				<as></as>
			</el-aside>
	      <el-container>
	        <el-header>
				 <ssk></ssk>
			  </el-header>
	        <el-main>
				  <sea></sea>
			  </el-main>
	        <!-- <el-footer>
				  <fo></fo>
			  </el-footer> -->
	      </el-container>
	    </el-container>
	</div>
	
</template>

<script>
	import sea from "@/components/sea.vue"
	import as from '@/components/as.vue'
	import ssk from '@/components/ssk.vue'
	export default{
		name:'search',
		components:{
			sea,
			as,
			ssk
		},
		data(){
			return{
				
			}
		},
		created() {
			
		}
		
	}
</script>

<style scoped="scoped">
	.el-input__icon{
		height: 0px;
	}
	.header{
		position: fixed;
		top: 0rem;
		display: flex;
		justify-content: flex-end;
		background-color:#f9f9f9;
		width: 100%;
		height: 4.125rem;
	}
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
	  .el-header, .el-footer {
	    background-color: #fff;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
		margin: 0rem;
		padding: 0px;
		z-index: 9;
	  }
	
	  .el-aside {
	    background-color: #fff;
	    color: #333;
	    text-align: center;
	    
	  }
	
	  .el-main {
	    background-color: #fff;
	    color: #333;
		width: 75.1875rem;
		height: 110%rem;
		overflow: hidden;
	   /* text-align: center; */
	    /* line-height: 160px; */
	  }
	
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>
