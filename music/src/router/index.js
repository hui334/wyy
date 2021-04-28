import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import('@/views/home.vue')
  },
  {
    path:'',
	redirect:'home'
  },
  {
	  path:'/search/:name/songs',
	  component: ()=>import('@/views/search.vue')
  },
  {
	  path:'/discover',
	  component:()=>import('@/views/discover.vue')
  },
  {
  	  path:'/songs',
  	  component:()=>import('@/views/song.vue')
  },
  {
  	  path:'/mv',
  	  component:()=>import('@/views/mv.vue')
  },
  {
	  path:'/playlist/:id',
	  component:()=>import('@/views/playlist.vue')
  },
  {
  	  path:'/mvs/:id',
  	  component:()=>import('@/views/mvs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
