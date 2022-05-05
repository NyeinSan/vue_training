<template>
  <div>
     <button @click="toggle">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name:'ToggleBtn',
  methods:{
    //to hide and show toggle form,send data to ToDoHeader.vue
    toggle() {
      this.$emit("toggle");
    }
  }
}

</script>

<style>

</style>