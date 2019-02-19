<template>
  <div class="box-contains">
    <img height="320" src="./404.jpg" alt="">
    <div class="btn-box">
      <el-button @click="goHome" type="primary" round>返回首页</el-button>
      <el-button @click="goBack" type="primary" round>返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.box-contains {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .btn-box {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
