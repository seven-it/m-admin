<template>
  <!-- 单一导航 -->
  <el-menu-item v-if="onlyItem && !onlyItem.hidden"  :index="onlyItem.path">
    <i v-if="onlyItem.meta && onlyItem.meta.icon" :class="onlyItem.meta.icon"></i>
    <span slot="title">{{onlyItem.meta.title}}</span>
  </el-menu-item>

  <!-- 多级导航 -->
  <el-submenu v-else-if="!item.hidden" :index="item.path">
    <template slot="title">
      <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>

    <template v-for="child in item.children">
      <!-- 递归组件 渲染多级导航 -->
      <siderbar-item v-if="child.children" :item="child" :key="child.path" />

      <el-menu-item v-else :key="child.path" :index="child.path">
        <i v-if="child.meta && child.meta.icon" :class="child.meta.icon"></i>
        <span>{{child.meta.title}}</span>
      </el-menu-item>
    </template>
  </el-submenu>
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
  },
  data() {
    return {
      onlyItem: {
        meta: {
          icon: "",
          title: ""
        }
      }
    };
  },
  created() {
    this.getOnlyItem();
  },
  methods: {
    // 判断单个导航的边际条件
    getOnlyItem() {
      console.log();
      if (this.item.onlyMenu) {
        this.onlyItem = !this.item.children ? this.item : this.item.children[0];

        return;
      }
      this.onlyItem = false;
    }
  }
};
</script>
