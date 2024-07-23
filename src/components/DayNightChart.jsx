import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DayNightChart = () => {
  const data = {
    labels: ['Day', 'Night'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DayNightChart;
