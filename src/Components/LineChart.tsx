import "../Common/css/line_chart.css";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <LineChart
      series={[
        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
      ]}
      width={700}
      height={400}
    />
  );
}
