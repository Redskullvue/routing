<template>
  <div class="note">
      <h1>Unable To Show Every Product detail while not using VUEX </h1>
      <p>In This Page URL will just dynamicly Change</p>
      <router-link to="/products">Products</router-link>
  </div>
</template>

<script>
export default {
    name : "productDetails"
}
</script>

<style scoped>
*{
 color : #fff;
}
.note{
  text-align: center;
}
</style>