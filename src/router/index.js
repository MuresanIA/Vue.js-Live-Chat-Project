import { createRouter, createWebHistory } from 'vue-router';
import { porjectAuth, projectAuth } from '../firebase/config';

//auth guard

const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser;
	console.log('current user in auth guard', user);
	if (!user) {
		next({ name: 'Welcome' });
	} else {
		next();
	}
};

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: () => import('../views/Welcome.vue')
	},

	{
		path: '/chatroom',
		name: 'Chatroom',
		component: () => import('../views/Chatroom.vue'),
		beforeEnter: requireAuth
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
