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
          data: [0, 5, 2, 6, 3, 9.3], 
          color: "#00308F",
          label: "Profit"
        },
        { 
          type: 'line', 
          data: [6, 3, 7, 9.5, 4, 2], 
          color: "orange",
          label: "Cost"
        }
      ]}
    />
  );
}
