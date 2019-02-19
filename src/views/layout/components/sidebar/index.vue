<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu 
      class="el-menu-wrapper"
      background-color="#304156"
      text-color="#bfcbd9"
      :collapse="isCollapse"
      mode="vertical"
      :default-active="$route.path"
      :router="true"
    >
      <img :class="['logo', {'logo-small':isCollapse}]" src="../../../../assets/images/logo.png" v-show="!isCollapse" alt="">
      <img class="logo logo-small" :src="logo.short" v-show="isCollapse" alt="">
      <siderbar-item v-for="route in routes" :key="route.path" :item="route"></siderbar-item>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapGetters } from "vuex";
import siderbarItem from "./sidebarItem";

export default {
  name: "sidebar",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      logo: {
        long: `../../../../assets/images/logo.png`,
        short:
          "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/vue/vue.png"
      }
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["isCollapse"]),
    routes() {
      return this.$router.options.routes;
    }
  },
  components: {
    siderbarItem
  }
};
</script>
