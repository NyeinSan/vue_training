<template>
  <div class="text-center m-5">
    <h1>Job Detail -{{id}}</h1>
    <router-link to="/job" class="btn btn-outline-secondary m-3">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name:'JobDetail',
  props:['id'],
}
</script>

<style>

</style>