import React from 'react';
import styled from 'styled-components';

const StatusCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px; 
  padding: 10px;
  background-color: #f9f9f9;
  width: 100%; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left; 
`;

const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 10px;
  width: 100%;
`;

const StatusCards = () => (
  <StatusContainer>
    <StatusCard className='foot'>
      <h4>Air Conditioner</h4>
      <div>
        <p>Temperature: 25°C</p>
        <p>Status: On</p>
        <p>Mode: Cooling</p>
      </div>
    </StatusCard>
    <StatusCard>
      <h4>Fridge</h4>
      <p>Temperature: 10°C</p>
      <p>Status: Standby</p>
    </StatusCard>
    <StatusCard>
      <h4>Washing Machine</h4>
      <p>Status: On</p>
      <p>Remaining Time: 1 hour</p>
    </StatusCard>
  </StatusContainer>
);

export default StatusCards;
