<template>
  <div> 
    <ul>
      <li v-for="(toDoList,index) in toDoLists" :key="index" >
        <TodoList :toDoList="toDoList" :index="index" @delete-item="deleteTodo(index)"></TodoList>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoList from './TodoList'
export default {
  components: { TodoList },
  name:'todoLists',
  props:['toDoLists'],
  
  methods:{
    //to delete iteem from todolist,send data to app.vue
    deleteTodo(index){
      this.$emit('delete-item',index)
    }
  }
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