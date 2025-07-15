<template>
  <div class="graph-card">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <select class="timescale-select" v-model="selectedScale">
        <option value="1M">1M</option>
        <option value="3M">3M</option>
        <option value="6M">6M</option>
        <option value="1Y">1Y</option>
      </select>
    </div>

    <div class="chart-placeholder">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: String,
});

const selectedScale = ref("1M");
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

/* Header layout */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.title {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
}

.timescale-select {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 0.9rem;
  color: #334155;
  cursor: pointer;
}

.chart-placeholder {
  height: 300px;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.9rem;
}
</style>
