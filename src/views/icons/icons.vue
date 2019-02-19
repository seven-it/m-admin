<template>
  <ul class="icon-contains">
    <li v-for="item in list" :key="item" >
      <i :class="[item, 'icon']"></i>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "el-icon-icozhuanhuan",
        "el-icon-msg",
        "el-icon-qian",
        "el-icon-yibiaopan",
        "el-icon-export",
        "el-icon-user",
        "el-icon-cloud-upload",
        "el-icon-table",
        "el-icon-indent",
        "el-icon-outdent",
        "el-icon-align-right"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.icon-contains {
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  li {
    width: 200px;
    height: 160px;
    text-align: center;
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  li:hover .icon {
    transform: scale(1.3);
  }
  .icon {
    font-size: 80px;
    display: block;
    padding: 20px 0;
    transition: all 0.5s;
  }
}
</style>
