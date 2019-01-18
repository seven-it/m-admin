<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu 
      class="el-menu-wrapper"
      background-color="#304156"
      text-color="#bfcbd9"
      :collapse="isCollapse"
      mode="vertical"
      :default-active="$route.path"
    >
      <img :class="['logo', {'logo-small':isCollapse}]" :src="isCollapse?logo.short:logo.long" alt="">
      <siderbar-item v-for="route in routes" :key="route.children[0].path" :item="route"></siderbar-item>
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
      logo: {
        long:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547530688343&di=b6aab3397ab4d5336c6807b39a2e38a8&imgtype=0&src=http%3A%2F%2Fpic26.nipic.com%2F20121216%2F7447430_143011243000_2.jpg",
        short: "https://cn.vuejs.org/images/logo.png"
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
