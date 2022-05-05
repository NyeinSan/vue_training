<template>
  <div id="app" class="todo">
    <ToDoHeader title="ToDo App" @toggle="toggle" :toggleForm="toggleForm"></ToDoHeader>
    <h3 class="count">ToDo Count: {{ toDoLists.length }}</h3>
    <div v-show="toggleForm">
    <AddTodoForm @create-item="insertItem"></AddTodoForm>
    </div>
    <TodoLists :toDoLists="toDoLists" @delete-item="deleteItem"></TodoLists>
  </div>
</template>

<script>


import AddTodoForm from './components/AddTodoForm'
import TodoLists from './components/TodoLists'
import ToDoHeader from './components/ToDoHeader'

export default {
  name: 'App',
  components: {
    AddTodoForm,
    TodoLists,
    ToDoHeader,
   
  },
  data() {
    return {
      toDoLists:[],
      toggleForm: true
    }
  },
  methods:{
    //add newitem to todolists
    insertItem(item){
      this.toDoLists.push(item)
    },
    //delete item from todolists
    deleteItem(index) {
      this.toDoLists.splice(index, 1);
    },
    //hide or show input form
    toggle() {
      this.toggleForm = !this.toggleForm;
    }
  }
}
</script>

<style scoped>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.todo {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

</style>
