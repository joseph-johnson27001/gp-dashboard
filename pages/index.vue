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

    <div class="graph-grid">
      <GraphCard
        v-for="(graph, index) in graphs"
        :key="index"
        :title="graph.title"
        :chartOptions="graph.chartOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Import graph configs
import { weightGraph } from "~/stores/graphs/weightGraph";
import { bmiGraph } from "~/stores/graphs/bmiGraph";
import { bloodPressureGraph } from "~/stores/graphs/bloodPressureGraph";
import { heartRateGraph } from "~/stores/graphs/heartRateGraph";

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

// Add chartOptions from imported graphs
const graphs = [
  {
    title: "Weight Over Time",
    chartOptions: weightGraph,
  },
  {
    title: "BMI Over Time",
    chartOptions: bmiGraph,
  },
  {
    title: "Blood Pressure Trends",
    chartOptions: bloodPressureGraph,
  },
  {
    title: "Heart Rate Trends",
    chartOptions: heartRateGraph,
  },
];
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.patient-name {
  font-size: 1.75rem;
  font-weight: 600;
}

.kpi-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

.graph-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
}

@media (min-width: 540px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .kpi-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1200px) {
  .graph-grid {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
}

@media (min-width: 1200px) {
  .kpi-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
