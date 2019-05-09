import Vue from 'vue';
import Router from 'vue-router';
import test from '@/pages/test';
import home from '@/pages/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
  ]
});
