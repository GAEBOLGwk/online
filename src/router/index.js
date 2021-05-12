import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/match',
    name: 'match',
    component: () => import( '../views/Match.vue')
  },
  {
    path: '/topics',
    name: 'topics',
    component: () => import( '../views/Topics.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import( '../views/Center.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/chat',
    name:'chat',
    component:Chat
  }
]

const router = new VueRouter({
  routes
})

export default router
