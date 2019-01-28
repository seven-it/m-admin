<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item 
          v-for="item in pathList" 
          :key="item.title"
          :to="item.path"
        >
          {{item.title}}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      pathList: []
    };
  },
  watch: {
    $route() {
      this.getPathList();
    }
  },
  created() {
    this.getBreadCrumbList();
  },
  methods: {
    // 获取路由记录，渲染面包屑
    getPathList() {
      let route = this.$route;
      let firstPath = route.matched[0].path;

      // 路由列表为空，或者当前路由为根路由
      if (!firstPath || !this.pathList.length) {
        this.pathList.length = 0;
        this.pathList.push({
          path: route.fullPath,
          title: route.meta.title
        });
      } else {
        this.pathList.splice(1, this.pathList.length - 1);

        let matched = route.matched.map(item => {
          return {
            path: item.fullPath,
            title: item.meta.title
          };
        });
        this.pathList = this.pathList.concat(matched);
      }

      // 将路由信息保存到sessionStorage中，防止用户刷新浏览器而导致路由信息丢失
      sessionStorage.setItem("breadCrumbList", JSON.stringify(this.pathList));
    },

    // 获取sessionStorage中保存的breadCrumbList
    getBreadCrumbList() {
      let breadCrumbList = JSON.parse(sessionStorage.getItem("breadCrumbList"));
      if (breadCrumbList) {
        this.pathList = breadCrumbList;
      } else {
        this.getBreadCrumbList();
      }
    }
  }
};
</script>
