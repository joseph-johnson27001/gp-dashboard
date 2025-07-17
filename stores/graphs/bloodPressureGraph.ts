import type { EChartsOption } from "echarts";

export const bloodPressureGraph: EChartsOption = {
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
    data: ["Jan 1", "Jan 15", "Feb 1", "Feb 15", "Mar 1", "Mar 15"],
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
      name: "Systolic",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        color: "#ef4444",
        width: 4,
      },
      itemStyle: {
        color: "#ef4444",
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
            { offset: 0, color: "rgba(239, 68, 68, 0.3)" },
            { offset: 1, color: "rgba(239, 68, 68, 0)" },
          ],
        },
      },
      data: [120, 122, 118, 121, 120, 115],
    },
    {
      name: "Diastolic",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        color: "#3b82f6",
        width: 4,
      },
      itemStyle: {
        color: "#3b82f6",
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
            { offset: 0, color: "rgba(59, 130, 246, 0.3)" },
            { offset: 1, color: "rgba(59, 130, 246, 0)" },
          ],
        },
      },
      data: [80, 82, 79, 81, 78, 75],
    },
  ],
};
