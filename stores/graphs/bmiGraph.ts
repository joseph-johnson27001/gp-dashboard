import type { EChartsOption } from "echarts";

export const bmiGraph: EChartsOption = {
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
      "Mar 1",
      "Mar 3",
      "Mar 5",
      "Mar 7",
      "Mar 9",
      "Mar 11",
      "Mar 13",
      "Mar 15",
      "Mar 17",
      "Mar 19",
      "Mar 21",
      "Mar 23",
      "Mar 25",
      "Mar 27",
      "Mar 29",
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
    axisLine: {
      show: false,
    },
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
      name: "BMI",
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
            { offset: 0, color: "rgba(59, 130, 246, 0.4)" },
            { offset: 1, color: "rgba(59, 130, 246, 0)" },
          ],
        },
      },
      data: [
        22.9, 22.9, 22.8, 22.7, 22.6, 22.6, 22.5, 22.4, 22.3, 22.2, 22.1, 22.0,
        21.9, 21.8, 21.7, 21.6, 21.5, 21,
      ],
    },
  ],
};
