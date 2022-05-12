<template>
  <div id="app">
    <TodoLists></TodoLists>
  </div>
</template>

<script>

import TodoLists from './components/TodoLists'
export default {
  name: 'App',
  components: {
    TodoLists,
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
