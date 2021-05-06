<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
      >
        <Todo :todo="todo" />
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <input
        :value="this.inputValue"
        @input="updateInputValue"
        type="text"
      />
      <input
        type="submit"
        value="Add Todo"
      />
    </form>
  </div>
</template>

<script>
import Todo from '../Todo/Todo.vue';

export default {
  name: 'TodoList',

  components: {
    Todo,
  },

  data() {
    return {
      inputValue: '',
      todos: [],
    };
  },

  methods: {
    addTodo() {
      this.todos.push(this.inputValue);
      this.inputValue = '';
    },

    updateInputValue(event) {
      this.inputValue = event.target.value;
    }
  }
}
</script>

<style scoped>

</style>