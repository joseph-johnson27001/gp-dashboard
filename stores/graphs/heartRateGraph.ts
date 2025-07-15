import type { EChartsOption } from "echarts";

export const heartRateGraph: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "Heart Rate",
      type: "line",
      data: [70, 72, 75, 73, 71],
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
