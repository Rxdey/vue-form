import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      name: 'home',
      component: () => import('./views/login.vue'),
      meta: {
        title: '登录'
      }
    }
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  ]
});
