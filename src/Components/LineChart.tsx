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
      xAxis={[
        {
          data: [1, 2, 3, 4, 5, 6], // X-axis labels as integers
          label: "Months",
          tickNumber: 6, // Ensures we only show integer ticks
        }
      ]}
      yAxis={[
        {
          valueFormatter: (value) => `$${value}` // Format Y-axis labels with dollar sign
        }
      ]}
    />
  );
}
