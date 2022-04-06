<template>
  <div>
    <div class="container">
      <div class="box">
        <h1 class="header">Log In</h1>
        <hr />
        <div class="form">
          <p>UserName :</p>
          <input type="text" placeholder=" Enter UserName" />
        </div>
        <div class="form">
          <p>Password :</p>
          <input type="text" placeholder=" Enter Password" />
        </div>
        <hr/>
        <br>
        <button class="btnn">Submit</button>
        <router-link to="/register"><button class="btn">Register</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "LoginPage"
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.box {
  background-color: rgb(129, 24, 24);
  padding: 40px;
  margin: 10px;
  color: #fff;
  width: 30%;
}
.header {
  text-align: center;
}
.form {
  padding: 15px;
}
input {
  border-right: none;
  border-left: none;
  border-top: none;
  background-color: rgb(129, 24, 24);
  outline: none;
  color: #fff;
  transition : all 1s;
}
input:focus{
    transform :scale(1.2)
}
button{
    width : 50%;
    display : inline;
    text-decoration: none;  
}
a{
    color : #fff;
    text-decoration: none;   
}
.btn{
    background-color : red;
}
.btnn{
    background-color : rgb(52, 250, 52);
}
</style>