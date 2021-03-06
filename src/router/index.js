import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		meta: { layout: 'empty' },
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		meta: { layout: 'empty' },
		component: () => import('../views/Register.vue'),
	},
	{
		path: '/',
		name: 'home',
		meta: { layout: 'main' },
		component: () => import('../views/HomeView'),
	},
	{
		path: '/categories',
		name: 'categories',
		meta: { layout: 'main' },
		component: () => import('../views/Categories.vue'),
	},
	{
		path: '/record',
		name: 'record',
		meta: { layout: 'main' },
		component: () => import('../views/Record.vue'),
	},
	{
		path: '/detail/record',
		name: 'detailRecord',
		meta: { layout: 'main' },
		component: () => import('../views/DetailRecord.vue'),
	},
	{
		path: '/history',
		name: 'history',
		meta: { layout: 'main' },
		component: () => import('../views/History.vue'),
	},
	{
		path: '/plannig',
		name: 'plannig',
		meta: { layout: 'main' },
		component: () => import('../views/Plannig.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		meta: { layout: 'main' },
		component: () => import('../views/Profile.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
