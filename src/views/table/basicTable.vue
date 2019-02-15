<template>
<div>
<el-table
    :data="tableData.filter(data => !search || data.id.includes(search))"
    :default-sort="{prop: 'date', order: 'descending'}">
    <el-table-column
      prop="id"
      label="ID"
      width="100"
      sortable>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable>
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
      align="right">
      <template slot="header" slot-scope="{}">
        <el-input 
          v-model="search" 
          size="mini" 
          placeholder="输入 ID 搜索">
        </el-input>
      </template>
      <template slot-scope="scope">
        <el-button 
          icon="el-icon-edit" 
          size="mini" 
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button 
          icon="el-icon-delete"
          size="mini" 
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="Edit" :visible.sync="dialogFormVisible">
    <el-form :model="form" label-width="80px">
      <el-form-item label="ID">
        <el-input v-model="form.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name" ></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogConfirm(form)">确 定</el-button>
    </div>
  </el-dialog>
</div>
  
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
      ],
      search: "",
      dialogFormVisible: false,
      form: {
        id: "",
        date: "",
        name: "",
        address: ""
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form = row;
    },
    handleDelete(index, row) {
      this.tableData = this.tableData.filter(data => row.id !== data.id);
      this.$message({
        showClose: true,
        message: "删除成功",
        type: "success"
      });
    },
    dialogConfirm(form) {
      console.log(form);
      this.tableData.forEach(val => {
        if (val.id === form.id) {
          val = form;
        }
      });
      this.$message({
        showClose: true,
        message: "修改成功",
        type: "success"
      });
      this.dialogFormVisible = false;
    }
  }
};
</script>
