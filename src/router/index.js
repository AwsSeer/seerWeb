import Vue from 'vue'
import VueRouter from 'vue-router'
import Tracking from '../views/Tracking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tracking',
    component: Tracking,
  },
  {
    path: '/exceptions',
    name: 'Exceptions',
    component: () => import('../views/Exceptions.vue'),
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue'),
  },
  {
    path: '/messages',
    name: 'Messages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
