<template>
 <div >
    <li v-for="(toDoList,index) in toDoLists" :key="index" class="todolist">
      <h3>{{ index }} <span> : </span>{{ toDoList }}</h3>
      <button class="trash" @click="deleteItem(index)">
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
    ...mapActions(['deleteItem'])
  },
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