<template>
  <el-table id="dragTable" border :data="tableData">
    <el-table-column
      prop="id"
      label="ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      width="80"
      align="center"
      label="Drag">
      <template slot-scope="{}">
        <span class="el-icon-rank drag-handler"></span>
      </template>
      
    </el-table-column>
  </el-table>
</template>

<script>
import Sortable from "sortablejs";
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王三虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王四虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.columnDrop();
    });
  },
  methods: {
    columnDrop() {
      const wrapperTr = document.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(wrapperTr, {
        ghostClass: "sortable-ghost",
        handle: ".drag-handler",
        setData: function(dataTransfer) {
          dataTransfer.setData("Text", "");
        }
      });
    }
  }
};
</script>

<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: rgb(255, 153, 0) !important;
}
</style>

<style scoped>
.drag-handler {
  font-size: 20px;
  cursor: pointer;
}
</style>
