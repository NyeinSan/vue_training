<template>
<div>
  <h1 class="ttl">{{title}}</h1>
  <ToggleButton @toggle="toggle">
    <span v-if="toggleForm===true">Hide Form</span>
    <span v-if="toggleForm===false">Show Form</span>
  </ToggleButton>
</div>  
</template>

<script>
import ToggleButton from './ToggleButton'
export default {
  components: { ToggleButton },
  name:'ToDoHeader',
  props:['title','toggleForm'],
  methods:{
    //to hide and show toggle form,send data to app.vue
    toggle() {
      this.$emit("toggle");
    }
  }
}
</script>

<style scoped>
.ttl {
  color: #363434;
  text-align: center;
}
</style>