import type { EChartsOption } from "echarts";

export const bmiGraph: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["Jan", "Feb", "Mar", "Apr", "May"],
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "BMI",
      type: "line",
      data: [22.9, 23.0, 23.1, 23.2, 23.1],
    },
  ],
};
