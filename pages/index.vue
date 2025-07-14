<template>
  <div class="dashboard">
    <div class="kpi-grid">
      <KpiCard
        v-for="(kpi, index) in kpis"
        :key="index"
        :title="kpi.title"
        :value="kpi.value"
      />
    </div>
  </div>
</template>

<script setup>
const kpis = [
  { title: "Age", value: "34" },
  { title: "Height", value: "180 cm" },
  { title: "Weight", value: "75 kg" },
  { title: "Blood Type", value: "O+" },
  { title: "Heart Rate", value: "72 bpm" },
  { title: "Blood Pressure", value: "120/80" },
  { title: "BMI", value: "23.1" },
  { title: "Last Visit", value: "2025-07-01" },
];
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* KPI Grid Layout */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}
</style>
