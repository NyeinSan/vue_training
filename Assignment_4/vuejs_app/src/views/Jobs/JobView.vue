<template>
   <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="job in jobs" :key="job.id">
        <div class="card">
          <div class="card-body text-center">
            <h2 class="font-weight-bold mt-4" >{{job.title}}</h2>
            <router-link :to="{name:'JobDetail',params:{id:job.id}}" class="btn btn-primary m-5">More Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'JobView',
 
  data(){
    return{
      jobs:[
        {id:"1",title:"project manager",detail:"project manager"},
        {id:"2",title:"web designer",detail:"web designer"},
        {id:"3",title:"developer",detail:"developer"}
      ]
    }
  }
}
</script>

<style>

</style>