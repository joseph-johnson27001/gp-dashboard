import type { EChartsOption } from "echarts";

export const heartRateGraph: EChartsOption = {
  tooltip: {
    trigger: "axis",
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderWidth: 2,
    textStyle: {
      color: "#1a202c",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    boundaryGap: false,
    axisLine: {
      lineStyle: { color: "#cbd5e0" },
    },
    axisLabel: {
      color: "#4a5568",
      fontSize: 12,
    },
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    splitLine: {
      lineStyle: { color: "#edf2f7" },
    },
    axisLabel: {
      color: "#4a5568",
      fontSize: 12,
    },
  },
  grid: {
    top: 30,
    right: 20,
    bottom: 30,
    left: 35,
    containLabel: true,
  },
  series: [
    {
      name: "Heart Rate",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        color: "#10b981",
        width: 4,
      },
      itemStyle: {
        color: "#10b981",
        borderColor: "#ffffff",
        borderWidth: 1,
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(16, 185, 129, 0.3)" },
            { offset: 1, color: "rgba(16, 185, 129, 0)" },
          ],
        },
      },
      data: [70, 72, 75, 73, 71, 74, 76, 78, 77, 75, 74, 73],
    },
  ],
};
