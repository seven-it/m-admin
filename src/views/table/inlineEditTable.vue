<template>
  <el-table
    border
    :data="tableData">
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
      label="地址">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input v-model="scope.row.address" class="edit-input" ></el-input>
          <el-button class="cancel-btn" icon="el-icon-refresh" size="mini"  type="warning" @click="cancelEdit(scope.row)">cancel</el-button>
        </template>
        <span v-else>{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      width="100"
      align="center"
      label="编辑">
      <template slot-scope="scope">
        <el-button 
          icon="el-icon-check"
          size="mini" 
          type="success"
          @click="handleConfirm(scope.row)"
          v-if="scope.row.edit">
          OK
        </el-button>
        <el-button 
          icon="el-icon-edit"
          size="mini" 
          type="primary"
          v-else
          @click="handleEdit(scope.row)">
          Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          edit: false
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王二虎",
          address: "上海市普陀区金沙江路 1517 弄",
          edit: false
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王三虎",
          address: "上海市普陀区金沙江路 1519 弄",
          edit: false
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王四虎",
          address: "上海市普陀区金沙江路 1516 弄",
          edit: false
        }
      ]
    };
  },
  methods: {
    handleEdit(row) {
      row.edit = !row.edit;
      row.address2 = row.address;
    },
    handleConfirm(row) {
      row.edit = false;
      this.$message({
        showClose: true,
        message: "修改成功",
        type: "success"
      });
    },
    cancelEdit(row) {
      row.address = row.address2;
      row.edit = false;
    }
  }
};
</script>
<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 18px;
}
</style>
