import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin';
import Login from './views/Login';
import MyIndex from './views/MyIndex';
import Data from './views/Data';
import Profile from './views/Profile';
import Index from './views/Index';

Vue.use(Router);


const routes = [{
		path: '',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin,
		children: [{
				path: '',
				redirect: 'index'
			},
			{
				path: 'index',
				name: 'index',
				component: Index
			}, {
				path: 'data',
				name: 'data',
				component: Data
			}, {
				path: 'profile',
				name: 'profile',
				component: Profile
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
	},
]

export default new Router({
	routes: routes
})
