<template>
  <div>
    <button @click="toggle">
      <span v-if="toggleForm===true">Hide Form</span>
      <span v-if="toggleForm===false">Show Form</span>
    </button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  name:'ToggleBtn',
  computed:{
    ...mapGetters(['toggleForm'])
  },
  methods:{
    ...mapActions(['toggle'])
  },
}
</script>

<style>

</style>