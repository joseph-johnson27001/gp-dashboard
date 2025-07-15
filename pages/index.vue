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

// Define chart options for each graph separately
const graphs = [
  {
    title: "Weight Over Time",
    chartOptions: {
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: { type: "value" },
      series: [
        { name: "Weight", type: "line", data: [72, 73, 71, 74, 72, 75, 73] },
      ],
    },
  },
  {
    title: "BMI Over Time",
    chartOptions: {
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May"] },
      yAxis: { type: "value" },
      series: [
        { name: "BMI", type: "line", data: [22.9, 23.0, 23.1, 23.2, 23.1] },
      ],
    },
  },
  {
    title: "Blood Pressure Trends",
    chartOptions: {
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["Week 1", "Week 2", "Week 3", "Week 4"],
      },
      yAxis: { type: "value" },
      series: [
        { name: "Systolic", type: "line", data: [120, 122, 118, 121] },
        { name: "Diastolic", type: "line", data: [80, 82, 79, 81] },
      ],
    },
  },
  {
    title: "Heart Rate Trends",
    chartOptions: {
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
      },
      yAxis: { type: "value" },
      series: [
        { name: "Heart Rate", type: "line", data: [70, 72, 75, 73, 71] },
      ],
    },
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
  grid-template-columns: 1fr;
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

@media (min-width: 1000px) {
  .graph-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .kpi-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
