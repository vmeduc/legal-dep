import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../pages/Home.vue'
import Legists from '../pages/Legists.vue'
import Chat from '../pages/Chat.vue';
import Auth from '../pages/Auth.vue';
import { permissionCheck } from './access';


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/legists',
    name: 'Legists',
    component: Legists,
    beforeEnter: permissionCheck,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: permissionCheck,
  },
  {
    path: '/login',
    name: 'Login',
    component: Auth,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Auth,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
