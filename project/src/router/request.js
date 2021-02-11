import axios from 'axios'
export function request(obj){
	const a=axios.create({
		baseURL:"http://152.136.185.210:7878/api/m5", 
		timeout:5000
	})
	return a(obj)
}
export class Goods{
	constructor(itemInfo,columns,services) {
	    this.title=itemInfo.title
		this.desc=itemInfo.desc
		this.newprice=itemInfo.price
		this.oldPrice=itemInfo.oldPrice
		this.discount=itemInfo.discountDesc
		this.columns=columns
		this.services=services
		this.realprice=itemInfo.lowNowPrice
		
	}
}
