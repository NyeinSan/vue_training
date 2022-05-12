<template>
  <div>
    <form @submit.prevent="addItem(newItem)">
      <input type="text" v-model="newItem.title">
      <button type="submit" >Add Item</button>
    </form>
    <p class="current">Current:{{newItem.title}}</p>
  </div>
</template>

<script>
export default {
  name:'AddTodoForm',
  data(){
    return {
      newItem:{
        title:""
      }
    }
  },
  methods:{
    //add newitem to todolists action from store & clear inputvalue
    addItem(newItem){
      this.$store.dispatch("addItem",newItem);
      this.newItem.title='';
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