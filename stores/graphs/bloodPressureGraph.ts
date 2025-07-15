import type { EChartsOption } from "echarts";

export const bloodPressureGraph: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["Week 1", "Week 2", "Week 3", "Week 4"],
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "Systolic",
      type: "line",
      data: [120, 122, 118, 121],
    },
    {
      name: "Diastolic",
      type: "line",
      data: [80, 82, 79, 81],
    },
  ],
  grid: {
    top: 30,
    right: 20,
    bottom: 20,
    left: 20,
    containLabel: true,
  },
};
