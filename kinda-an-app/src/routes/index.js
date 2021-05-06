import Vue from 'vue';
import Router from 'vue-router';

import TodoList from '../components/TodoList/TodoList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      component: TodoList,
      name: 'TodoList',
      path: '/todos',
    }
  ],
});
