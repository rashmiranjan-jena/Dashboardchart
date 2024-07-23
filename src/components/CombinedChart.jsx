import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChartWrapper = styled.div`
  width: 50%;
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

  return (
    <Container>
      <ChartWrapper>
        <Bar data={barData} options={barOptions} />
      </ChartWrapper>
      <ChartWrapper>
        <Doughnut data={doughnutData} />
      </ChartWrapper>
    </Container>
  );
};

export default CombinedChart;
