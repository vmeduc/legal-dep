import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import News from '../pages/News.vue';
import Legists from '../pages/Legists.vue';
import Auth from '../pages/Auth.vue';
import Chat from '../pages/Chat.vue';
import Profile from '../pages/Profile.vue';
import Consults from '../pages/Consults.vue';
import { permissionCheck } from './access';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'News',
    component: News,
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
    path: '/profile/:name',
    name: 'Profile',
    component: Profile,
    beforeEnter: permissionCheck,
  },
  {
    path: '/login',
    name: 'Login',
    component: Auth,
    // beforeEnter: (to: any, from: any, next: any) => {
    //   if (confirm('leave?')) {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // },
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Auth,
  },
  {
    path: '/consults/',
    name: 'Consults',
    component: Consults,
    beforeEnter: permissionCheck,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
