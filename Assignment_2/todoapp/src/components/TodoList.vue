<template>
 <div class="todolist">
    <h3>{{ index }} <span> : </span>{{ toDoList }}</h3>
    <button class="trash" @click="deleteTodo">
      <i class="fa-solid fa-trash-can"></i>
    </button>
 </div>
</template>

<script>
export default {
  name:'TodoList',
  props:['toDoList','index'],
  methods:{
    deleteTodo(){
      this.$emit('delete-item',this.index)
    }
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