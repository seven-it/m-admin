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
      <img :class="['logo', {'logo-small':isCollapse}]" :src="isCollapse?logo.short:logo.long" alt="">
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
      logo: {
        long:
          "https://upload.wikimedia.org/wikipedia/zh/thumb/6/61/ONE_PIECE_Logo.svg/1200px-ONE_PIECE_Logo.svg.png",
        short:
          "https://banner2.kisspng.com/20180406/kfq/kisspng-monkey-d-luffy-one-piece-usopp-logo-pirate-hat-5ac78c56227c83.5516273415230270301413.jpg"
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
