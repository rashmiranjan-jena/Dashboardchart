import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';


const ChartContainer = styled.div`
  width: 150px; 
  height: 150px; 
  position: relative;
`;


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

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <ChartContainer>
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default DayNightChart;
