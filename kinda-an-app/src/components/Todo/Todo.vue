<template>
  <div>
    {{ todo }}
  </div>
</template>

<script>
export default {
  name: 'Todo',

  props: {
    todo: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>

</style>