<template>
  <div>
    <panel-card />
    <charts />
  </div>
</template>

<script>
import panelCard from "./components/panelCard";
import charts from "./components/charts";
export default {
  components: {
    panelCard,
    charts
  }
};
</script>
