<template>
  <div>
    <h2>Todo Lists</h2>

    <div>
      <form @submit.prevent="addItem(newTodo)">
        <input type="text" v-model="newTodo.title">
        <button type="submit">Add Item</button>
      </form>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todolist">
      <span>{{ todo.title }}</span>
      <button @click="deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
      
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name:"TodoLists",
  data(){
    return{
     todos:[],
     newTodo:{
       title:""
     }
    }
  },
  
  mounted(){
    axios.get('http://localhost:3000/todos')
    .then((response)=>{
      this.todos=response.data
    })
  },
  methods:{
    addItem(newTodo){
      axios.post('http://localhost:3000/todos',newTodo)
      .then((response)=>{
        //this.todos = response.data;
        this.todos=[...this.todos,response.data]
        this.newTodo.title=""
      })
    },
    deleteTodo(deleteItem){
      axios.delete(`http://localhost:3000/todos/${deleteItem}`)
        this.todos = this.todos.filter(todo =>{
        return todo.id != deleteItem
      })
    }
  }
}
</script>

<style>
.todolist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px !important;
  padding: 20px;
  background-color: #f2f2f2;
  width: 300px;
  margin: 0 auto;
}
li{
  list-style-type: none;
}
</style>