import * as React from "react";
import { LineChart } from "@mui/x-charts";

export default function BasicLineChart() {
  return (
    <LineChart
      width={700}
      height={400}
      series={[
        { 
          type: 'line', 
          data: [0, 500, 200, 600, 300, 930], 
          color: "#00308F",
          label: "Profit"
        },
        { 
          type: 'line', 
          data: [600, 300, 700, 950, 400, 200], 
          color: "orange",
          label: "Cost"
        }
      ]}
    />
  );
}
