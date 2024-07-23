import React from 'react';
import styled from 'styled-components';

const StatusCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
`;

const StatusCards = () => (
  <div>
    <StatusCard>
      <h4>Air Conditioner</h4>
      <p>Status: On</p>
      <p>Temperature: 25°C</p>
      <p>Mode: Cooling</p>
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
  </div>
);

export default StatusCards;
