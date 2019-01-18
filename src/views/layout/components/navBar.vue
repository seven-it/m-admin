<template>
  <div class="nav-bar-wrapper">
    <!-- 菜单按钮 -->
    <i class="el-icon-menu icon-menu" @click="toggleSideBar"></i>

    <!-- 面包屑导航 -->
    <breadcrumb />

    <!-- 用户信息及操作 -->
    <div class="user-info-box">
      <img class="user-image" width="40" height="40" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547616696602&di=099dc3aa76c177248f0f8f1df1b48bca&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F83025aafa40f4bfb445d83ff084f78f0f636188f.jpg" alt="">
      <span class="user-role">超级管理员</span>
      <el-button type="primary" size="small" icon="el-icon-setting">设置</el-button>
      <el-button type="primary" size="small" icon="el-icon-edit">退出</el-button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import breadcrumb from "@/components/Breadcrumb/";
export default {
  name: "navBar",
  methods: {
    ...mapMutations({
      toggleSideBar: "TOGGLE_SIDE_BAR"
    })
  },
  components: {
    breadcrumb
  }
};
</script>

<style lang="scss" scoped>
.user-info-box {
  display: flex;
  align-items: center;
  padding-right: 10px;
  flex-grow: 1;
  justify-content: flex-end;
}

%user-margin-r {
  margin-right: 10px;
}
.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  @extend %user-margin-r;
}
.user-role {
  font-size: 14px;
  color: #304156;
  cursor: pointer;
  @extend %user-margin-r;
}
.icon-menu {
  margin: 0 10px;
  font-size: 26px;
  color: #304156;
  cursor: pointer;
}
</style>
