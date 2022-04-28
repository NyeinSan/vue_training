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
    toggle() {
      this.$emit("toggle");
    }
  }
}

</script>

<style>

</style>