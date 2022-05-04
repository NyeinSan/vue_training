<template>
  <div>
    <form @submit.prevent="addItem(newItem)">
      <input type="text" v-model="newItem">
      <button type="submit" :disabled="newItem.length === 0">Add Item</button>
    </form>
    <p class="current">Current:{{newItem}}</p>
  </div>
</template>

<script>
export default {
  name:'AddTodoForm',
  data(){
    return {
      newItem:''
    }
  },
  methods:{
    addItem(newItem){
      this.$store.dispatch("addItem",newItem);
      this.newItem='';
   } 
  },
}
</script>

<style scoped>
.current {
  padding-left: 28px;
  font-size: 20px;
  text-align: left;
}
</style>