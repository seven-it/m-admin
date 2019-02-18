<template>
  <el-table :data="formatData"  :row-style="showRow" border>
    <el-table-column  v-for="(column,index) in columns" :label="column.text" :key="column.value">
      <template  slot-scope="scope">
        <template v-if="index === 0">
          <span v-for="space in scope.row._level"  :key="space" class="ms-tree-space"></span>
        </template>
        <span v-if="iconShow(index,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-caret-right"/>
          <i v-else class="el-icon-caret-bottom"/>
        </span>
        {{ scope.row[column.value] }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import treeToArray from "./eval.js";
export default {
  name: "TreeTable",
  props: {
    treeData: {
      type: Array
    },
    columns: {
      type: Array,
      default: () => []
    },
    expandedAll: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    formatData() {
      let tmp = this.treeData;
      return treeToArray(tmp, this.expandedAll);
    }
  },
  methods: {
    showRow(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;"
        : "display:none;";
    },
    toggleExpanded(index) {
      const record = this.formatData[index];
      record._expanded = !record._expanded;
    },
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    }
  }
};
</script>

<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;
.ms-tree-space {
  display: inline-block;
  width: $space-width;
  height: 14px;
}
.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
