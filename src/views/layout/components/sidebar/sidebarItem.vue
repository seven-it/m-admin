<template>
  <div>
    <template>
    <router-link :to="item.children[0].path">
      <el-menu-item v-if="!item.meta" :index="item.children[0].path">{{item.children[0].meta.title}}</el-menu-item>
    </router-link>
    </template>
    
  </div>
</template>
<script>
export default {
  name: "siderbarItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
