<template>
<div>
  <div class="charts-contains">
    <div class="charts-item">
      <ve-radar :data="chartData"></ve-radar>
    </div>
    <div class="charts-item">
      <ve-pie :data="chartData"></ve-pie>
    </div>
    <div class="charts-item">
      <ve-histogram :data="chartData"></ve-histogram>
    </div>
  </div>
  <div class="charts-line">
    <ve-line :data="chartData"></ve-line>
  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "Mon", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "Tue", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "Web", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "Thu", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "Fri", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "Sat", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
          { 日期: "Sun", 访问用户: 3593, 下单用户: 3293, 下单率: 0.7 }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.charts-contains {
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
}
.charts-item {
  width: 30%;
  background-color: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
}
.charts-line {
  background-color: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
}
</style>
