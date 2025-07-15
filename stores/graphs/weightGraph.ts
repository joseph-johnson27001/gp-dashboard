import type { EChartsOption } from "echarts";

export const weightGraph: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "Weight",
      type: "line",
      data: [72, 73, 71, 74, 72, 75, 73],
    },
  ],
};
