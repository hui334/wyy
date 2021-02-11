import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	{
    path:'',
	redirect:'/homepage',
	},
	{
	path:'/homepage',
	component:()=>import('@/views/homepage')
	},
	{
	path:'/classify',
	component:()=>import('@/views/classify')
	},
	{
	path:'/shopcart',
	component:()=>import('@/views/shopcart')
	},
	{
	path:'/my',
	component:()=>import('@/views/my')
	},
	{
	path:'/detail/:iid',
	component:()=>import('@/views/details')
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
