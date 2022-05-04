<template>
  <div id="app" class="todo">
    <ToDoHeader></ToDoHeader>
    <h3 class="count">ToDo Count: {{ toDoLists.length }}</h3>
    <div v-show="toggleForm">
      <AddTodoForm ></AddTodoForm>
    </div>
    <TodoLists></TodoLists>
  </div>
</template>

<script>


import AddTodoForm from './components/AddTodoForm'
import TodoLists from './components/TodoLists'
import ToDoHeader from './components/ToDoHeader'
import {  mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AddTodoForm,
    TodoLists,
    ToDoHeader,
  },
  computed:{
    ...mapGetters(['toDoLists','toggleForm'])
  },
 
}
</script>

<style scoped>
.todo {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}
</style>
