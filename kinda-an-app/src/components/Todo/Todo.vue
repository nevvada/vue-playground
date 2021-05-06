<template>
  <div id="wrapper">
    <span class="todoItem">{{ number }}. {{ todo }}</span>
    <button
      @click="remove"
      class="removeTodoButton"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  name: 'Todo',

  props: {
    number: {
      required: true,
      type: Number,
    },

    todo: {
      required: true,
      type: String,
    },
  },

  methods: {
    remove() {
      this.$emit('removeTodo', this.number);
    }
  }
}
</script>

<style scoped>
  #wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .removeTodoButton {
    height: 80%;
    cursor: pointer;
  }
</style>