import axios from 'axios'
import { ElLoading } from 'element-plus';
export function request(obj){
	const a=axios.create({
		baseURL:'https://api.mtnhao.com/',
		timeout:10000
	})
	let loadingInstance = ElLoading.service({
				          lock: true,
				          text: 'Loading',
				          spinner: 'el-icon-loading',
				          background: 'rgba(0, 0, 0, 0.7)'
				        });
	a.interceptors.request.use((data)=>{
		//loadingInstance
		console.log(data.url.includes('/search/suggest'))
		if(data.url.includes('/search/suggest')){
			loadingInstance.close();
			console.log("响应")
		}
		return data
	})
	a.interceptors.response.use((data)=>{
		loadingInstance.close();
		
		//console.log("响应")
		return data
	})
	return a(obj)
}
