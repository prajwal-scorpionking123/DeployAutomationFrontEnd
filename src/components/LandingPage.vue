<template>
  <div class="container mt-5 ">
     
      <router-link type="button" class="btn btn-outline-primary" style="margin-right: 6px" to="/ITSignin">IT Infra Admin</router-link>
      <router-link type="button" class="btn btn-outline-primary" to="/DeveloperSignin">Developer </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"LandingPage"
}
</script>

<style>

</style>