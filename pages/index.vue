<template>
  <div class="dashboard">
    <h1 class="patient-name">{{ patientName }} ({{ patientAge }})</h1>

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
import { ref } from "vue";

const patientName = ref("John Doe");
const patientAge = ref(34);

const kpis = [
  { title: "Height", value: "180 cm" },
  { title: "Weight", value: "75 kg" },
  { title: "Blood Type", value: "O+" },
  { title: "Heart Rate", value: "72 bpm" },
  { title: "Blood Pressure", value: "120/80" },
  { title: "BMI", value: "23.1" },
  { title: "Last Visit", value: "2025-07-01" },
  { title: "Allergies", value: "Penicillin" },
];
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Patient name and age */
.patient-name {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* KPI Grid Layout */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}
</style>
