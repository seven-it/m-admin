<template>
  <tree-table :treeData="data" v-loading="loading" :columns="columns"></tree-table>
</template>
<script>
import treeTable from "@/components/treeTable/index";

export default {
  components: {
    treeTable
  },
  data() {
    return {
      columns: [
        {
          text: "职位",
          value: "job",
          width: 200
        },
        {
          text: "姓名",
          value: "name"
        },
        {
          text: "地址",
          value: "address"
        }
      ],
      data: [],
      loading: true
    };
  },
  created() {
    this.getTreeList();
  },
  methods: {
    getTreeList() {
      this.$api.getTree({}).then(res => {
        this.data = res.data.data.treeList;
        this.loading = false;
      });
    }
  }
};
</script>
