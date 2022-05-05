<template>
<div>
  <h1 class="ttl">{{getTitle}}</h1>
  <ToggleButton></ToggleButton>
</div>  
</template>

<script>
import {  mapGetters } from 'vuex';
import ToggleButton from './ToggleButton'
export default {
  components: { ToggleButton },
  computed:{
    //get title from store
    ...mapGetters(['getTitle'])
  },
}
</script>

<style scoped>
.ttl {
  color: #363434;
  text-align: center;
}
</style>