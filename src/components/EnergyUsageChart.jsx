import React from 'react';
import { Line } from 'react-chartjs-2';

const EnergyUsageChart = () => {
  const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Energy Usage',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default EnergyUsageChart;
