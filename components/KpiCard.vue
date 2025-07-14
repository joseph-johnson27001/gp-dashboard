<!-- components/KpiCard.vue -->
<template>
  <div class="kpi-card">
    <h3>{{ title }}</h3>
    <p class="value">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
});
</script>

<style scoped>
.kpi-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 100%;
}

.kpi-card h3 {
  font-size: 14px;
  color: #4a5568;
  margin: 0;
}

.kpi-card .value {
  font-size: 24px;
  font-weight: bold;
  margin-top: 0.5rem;
  color: #2d3748;
}
</style>
