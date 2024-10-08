import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { products, valueFormatter } from './ProductsSold';

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: products,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
          // The color is now set per item, no need to define it here
        },
      ]}
      height={200}
    />
  );
}
