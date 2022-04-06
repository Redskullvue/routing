<template>
  <div>
    <main-page />
    <router-view></router-view>
    
  </div>
</template>

<script>
import MainPage from "./components/mainpage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
body{
  background-color :rgb(44, 0, 0);
}
</style>
