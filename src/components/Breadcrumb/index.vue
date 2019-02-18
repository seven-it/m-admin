<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <template v-for="item in pathList">
          <el-breadcrumb-item 
            v-if="item.title"
            :key="item.title"
            :to="item.path"
          >
          {{item.title}}
        </el-breadcrumb-item>
        </template>
        
      </transition-group>
    </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      pathList: [
        {
          path: "/",
          title: "仪表盘"
        }
      ]
    };
  },
  watch: {
    $route() {
      this.getPathList();
    }
  },
  created() {
    this.getPathList();
  },
  methods: {
    // 获取路由记录，渲染面包屑
    getPathList() {
      // 每次路由跳转都会重置 pathList 数组
      this.pathList.splice(1, this.pathList.length - 1);

      let route = this.$route;
      let firstPath = route.matched[0].path;

      // 当前路由不是根路由时， 更新面包屑
      if (firstPath) {
        let matched = route.matched.map(item => {
          return {
            path: item.fullPath,
            title: item.meta.title
          };
        });
        this.pathList = this.pathList.concat(matched);
      }
    }
  }
};
</script>
