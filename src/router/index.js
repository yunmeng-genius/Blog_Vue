import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'About',
		component: About
	},
	{
		
		path: '/blog',
		name: 'Blog' , 
		component: Blog
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
