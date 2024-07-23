import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChartWrapper = styled.div`
  flex: 1 1 45%; 
  max-width: 500px; 
  height: 400px; 
  margin: 20px; 
  border: 2px solid #ddd; 
  border-radius: 12px; 
  background-color: #f4f4f4; 
  position: relative;
  padding: 20px; 
  box-sizing: border-box; 
`;

const CombinedChart = () => {
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Morning',
        data: [9, 2, 2, 2, 2, 2, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: [6, 2, 2, 2, 9, 2, 9],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutData = {
    labels: ['Day', 'Night'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Container>
      <ChartWrapper>
        <Bar data={barData} options={barOptions} />
      </ChartWrapper>
      <ChartWrapper>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </ChartWrapper>
    </Container>
  );
};

export default CombinedChart;
