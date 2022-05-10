<template>
  <div id="app">
    <Navar></Navar>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<script>


import TheFooter from './components/TheFooter'
import Navar from './components/Navar'
export default {
  name: 'App',
  components: {
    TheFooter,
    Navar,
  }
}
</script>

<style>

</style>
