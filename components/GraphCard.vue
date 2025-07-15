<template>
  <div class="graph-card">
    <h2 class="title">{{ title }}</h2>
    <div class="chart-placeholder">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
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

.title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
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
