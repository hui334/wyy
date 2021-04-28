<template>
	<div class="home">
		<!-- <as :sycur=sycur :isss='isss' :ss='ss'></as>
		<ssk></ssk>
		<ho :banner='banner' :recommend='recommend' :newmusic='newmusic' :mv='mv'   @gdx="bfg"></ho> -->
		<el-container>
			<el-aside width="12.5rem">
				<as :sycur=sycur :isss='isss' :ss='ss'></as>
			</el-aside>
			<el-container>
				<el-header>
					<ssk></ssk>
				</el-header>
				<el-main>
					<ho :banner='banner' :recommend='recommend' :newmusic='newmusic' :mv='mv'   @gdx="bfg"></ho>
				</el-main>

			</el-container>
		</el-container>
	</div>
</template>

<script>
	import {
		request
	} from '@/router/request.js'
	import ho from '@/components/ho.vue'
	import as from '@/components/as.vue'
	import ssk from '@/components/ssk.vue'
	export default {
		name: 'home',
		data() {
			return {
				banner: '',
				recommend: '',
				newmusic: '',
				mv: '',
				url: '',
				ss: '',
				isss: false,
				input: '',
				sycur: '',
			}
		},
		methods: {		
			bfg(url) {
				this.url = url
				setTimeout(() => {
					this.$refs.aaa.play()
				}, 500)
			}
			
		},
		components: {
			ho,
			as,
			ssk
		},
		created() {
			console.log(this.sycur = this.$route.path.includes('/home'))
			request({
				url: '/banner',
				params: {
					type: 0
				}
			}).then((res) => {
				console.log(this.banner = res.data.banners)
			})
			request({
				url: '/personalized',
				params: {
					limit: 10
				}
			}).then((res) => {
				console.log(this.recommend = res.data.result)
			})
			request({
				url: '/personalized/newsong',
				params: {
					limit: 10
				}
			}).then((res) => {
				console.log(this.newmusic = res.data.result)
			})
			request({
				url: '/personalized/mv',
				params: {
					limit: 4
				}
			}).then((res) => {
				console.log(this.mv = res.data.result)
			})
			
		},
		
	}
</script>
<style scoped="scoped">
	

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.el-header,
	.el-footer {
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
		height: 110rem;
		overflow: hidden;
		/* text-align: center; */
		/* line-height: 160px; */
	}

	body>.el-container {
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
