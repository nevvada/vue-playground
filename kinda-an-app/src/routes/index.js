import Vue from 'vue';
import Router from 'vue-router';

import ECommerceStore from '../components/ecommerce/ECommerceStore/ECommerceStore.vue';
import Home from '../components/home/Home.vue';
import TodoList from '../components/todos/TodoList/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: Home,
      name: 'Home',
      path: '/',
    },
    {
      component: TodoList,
      name: 'Todo List',
      path: '/todos',
    },
    {
      component: ECommerceStore,
      name: 'Store',
      path: '/ecommerce',
    }
  ],
});
