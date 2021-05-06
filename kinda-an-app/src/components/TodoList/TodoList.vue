<template>
  <div class="wrapper">
    <h1>Todos</h1>
    <ol id="todoList">
      <li
        v-for="(todo, index) in todos"
        :key="index"
        id="todoListItem"
      >
        <Todo
          :number="index + 1"
          :todo="todo"
          @removeTodo="removeTodo"
        />
      </li>
    </ol>
    <form
      @submit.prevent="addTodo"
      id="addTodoForm"
    >
      <input
        :value="this.inputValue"
        @input="updateInputValue"
        type="text"
      />
      <div id="submitButtonWrapper">
        <input
          id="submitButton"
          type="submit"
          value="Add Todo"
        />
      </div>
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

    removeTodo(id) {
      console.log('TODOLIST: clicked')
      this.todos = this.todos.filter((_, index) => {
        return (index !== (id - 1))
      })
    },

    updateInputValue(event) {
      this.inputValue = event.target.value;
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #todoList {
    width: 30%;
  }

  #todoListItem {
    margin: 1em 0;
    padding: 1em;

    &:hover {
      border: 1px solid black;
    }
  }

  #addTodoForm {
    height: 10em;
    display: flex;
    align-items: center;
  }

  #addTodoForm > input[type="text"] {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1.5em;
  }

  #submitButtonWrapper {
    display: inline-block;
  }

  #submitButton {
    background-color: #f2b5d4;
    border: none;
    border-radius: 7%;
    font-size: 1.5em;
    margin-left: 2em;
    opacity: 0.9;
    padding: 1em 2em;

    &:hover {
      animation: buttonHover 0.5s forwards;
      cursor: pointer;
    }
  }

  @keyframes buttonHover {
    to {
      border: 1px solid #000;
    }
  }
</style>