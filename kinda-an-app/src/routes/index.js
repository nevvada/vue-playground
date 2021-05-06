import Vue from 'vue';
import Router from 'vue-router';

import TodoList from '../components/todos/TodoList/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      component: TodoList,
      name: 'TodoList',
      path: '/todos',
    },
    // {
    //   component: ECommerce,
    //   name: 'ECommerce',
    //   path: '/ecommerce',
    // }
  ],
});
