<template>
 <div >
    <li v-for="toDoList in toDoLists" :key="toDoList.id" class="todolist">
      <h3>{{toDoList.id}} <span> : </span>{{ toDoList.title }}</h3>
      <button class="trash" @click="deleteItem(toDoList.id)">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </li>
 </div>
</template>

<script>
import {  mapGetters,mapActions } from 'vuex'
export default {
  name:'TodoList',
  computed:{
    //get todolists from store
    ...mapGetters(['toDoLists'])
  },
  methods:{
    //delete action from store 
    ...mapActions(['getTodos','deleteItem'])
  },
 
   mounted(){
  this.getTodos()
}
}
</script>

<style>
.todolist {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 20px;
  background-color: #f2f2f2;
}
.trash {
  border: none;
  color: #ff0000;
  font-size: 16px;
}
</style>