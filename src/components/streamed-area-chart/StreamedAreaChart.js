import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Legend,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { monthlyData } from "../../data/streamed-area-chart-data";

const StreamedAreaChart = () => {
  return (
    <AreaChart
      width={800}
      height={400}
      data={monthlyData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="0 0" />
      <XAxis dataKey="month" />
      <YAxis
        ticks={[0, 10, 20, 30, 40, 50, 60]}
        label={{
          value: "Story Point(Days)",
          angle: -90,
          position: "insideLeft",
        }}
      />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="issueOpen"
        stroke="#d600ab"
        fill="#d600ab"
      />
      <Area
        type="monotone"
        dataKey="issueStarted"
        stroke="#f75e76"
        fill="#f75e76"
      />
      <Area
        type="monotone"
        dataKey="issueCompleted"
        stroke="#f7a806"
        fill="#f7a806"
      />
    </AreaChart>
  );
};

export default StreamedAreaChart;
