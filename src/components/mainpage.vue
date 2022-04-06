<template>
  <div class="container">
    <div class="flexdesign">
      <div class="header">
        <h1>Vue2Routing Header</h1>
      </div>
      <div>
       <router-link class="link" to="/">Home</router-link>
        |
        <router-link class="link" to="/register">Register</router-link>
        |
        <router-link class="link" to="/login">Login</router-link>
        |
        <router-link class="link" to="/products">Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.container {
  background-color: brown;
  width: 99%;
  padding: 10px;
  color: #fff;
}
.flexdesign{
  display : flex;
  justify-content: space-between;
  flex-direction:row;
  align-items: center;
  flex-wrap : wrap;
}
.link{
  color : #fff;
  text-decoration: none;
  padding : 5px;
}
.link:hover{
  color : red;
}
</style>
