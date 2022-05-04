<template>
  <div> 
    <ul>
      <TodoList></TodoList>
    </ul>
  </div>
</template>

<script>
import TodoList from './TodoList'
export default {
  components: { TodoList },
  name:'todoLists',
}
</script>

<style>
ul {
  padding: 0;
  padding-left: 28px;
  text-align: left;
  list-style-type: none;
}

</style>