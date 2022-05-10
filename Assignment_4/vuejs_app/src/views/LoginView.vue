<template>
  <div class="container mt-5">
    <div class="row justify-content-center" >
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <form @submit.prevent="login">
              <div class="form-group my-3">
                <input type="text" v-model="email" class="form-control" placeholder="Email">
              </div>
              <div class="form-group my-3">
                <input type="password" v-model="password" class="form-control" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <div v-if="err" class="alert">{{ err }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'LoginView',
  data(){
    return {
      email:"",
      password:"",
      err:""
    }
  },
  methods:{
    //login to profile
    login(){
      if(this.email === "admin@gmail.com" && this.password === "111111"){
        localStorage.setItem('navguard',this.email);
        this.$router.push('/profile')
      }else{
        this.err ="Email or Password is incorrect"
      }
    }
  }
}
</script>

<style>
.alert{
  color:red;
  margin-bottom: 0 !important;
}
</style>