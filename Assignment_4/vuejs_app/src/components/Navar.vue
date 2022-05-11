<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link a class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link a class="nav-link" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link a class="nav-link" aria-current="page" :to="{name:'Job'}">Jobs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " aria-current="page" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " aria-current="page" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link " aria-current="page" to="#">Logout</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name:"MenuBar",
  methods:{
    //logout
    logout(){
      localStorage.clear();
      this.$router.push('/login').catch(()=>{})
    }
  }
}
</script>

<style>
nav a.router-link-exact-active {
  background-color: #42b983;
  color: #fff !important;
  border-radius: 5px;
}
</style>