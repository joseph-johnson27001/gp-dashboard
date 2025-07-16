import type { EChartsOption } from "echarts";

export const weightGraph: EChartsOption = {
  tooltip: { trigger: "axis" },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLine: {
      lineStyle: { color: "#888" },
    },
    axisTick: { show: false },
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: { type: "dashed", color: "#eee" },
    },
    axisLine: { show: false },
  },
  grid: {
    top: 30,
    right: 20,
    bottom: 20,
    left: 20,
    containLabel: true,
  },
  series: [
    {
      name: "Weight",
      type: "bar",
      data: [72, 73, 71, 74, 72, 75, 73],
      barWidth: "70%",
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#3b82f6" },
            { offset: 1, color: "#3b82f6" },
          ],
        },
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowBlur: 6,
      },
      emphasis: {
        itemStyle: {
          color: "#3b82f6",
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      },
      animationEasing: "cubicOut",
      animationDuration: 800,
    },
  ],
};
