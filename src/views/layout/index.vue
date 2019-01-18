<template>
  <div class="app-wrapper">
   <side-bar class="sidebar-container"></side-bar>  
   <div class="main-container">
     <nav-bar></nav-bar>
     <app-main></app-main>
   </div>
  </div>
</template>

<script>
import { navBar, appMain, sideBar } from "./components";

export default {
  components: {
    navBar,
    appMain,
    sideBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
