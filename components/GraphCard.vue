<template>
  <div class="graph-card">
    <div class="graph-header">
      <h2 class="title">{{ title }}</h2>
      <select
        class="time-range-select"
        v-model="selectedRange"
        @change="onRangeChange"
      >
        <option value="7">7D</option>
        <option value="30">1M</option>
        <option value="90">3M</option>
        <option value="365">1Y</option>
      </select>
    </div>

    <div class="chart-wrapper">
      <VChart :option="chartOptions" autoresize />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  chartOptions: Object,
});

const emit = defineEmits(["update-range"]);

const selectedRange = ref("30");

function onRangeChange() {
  emit("update-range", selectedRange.value);
}
</script>

<style scoped>
.graph-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.graph-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: 600;
  font-size: 1.1rem;
}

.time-range-select {
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
}

.chart-wrapper {
  height: 300px;
}
</style>
