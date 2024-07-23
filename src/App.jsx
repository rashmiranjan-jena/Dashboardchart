import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from 'chart.js';
import CombinedChart from './components/CombinedChart';
import EnergyUsageChart from './components/EnergyUsageChart';
import LightsChart from './components/LightsChart';
import TemperatureChart from './components/TemperatureChart';
import StatusCards from './components/StatusCards';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Container = styled.div`
  background-color: white;
  padding: 20px;
`;

const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  margin: 0;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const SearchBar = styled.input`
  padding: 5px;
  font-size: 16px;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ChartWrapper = styled.div`
  flex: 1 1 30%;
  margin: 10px;
  width:300px;
 
 `;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-around;

`;

const App = () => (
  <Container>
     <header>
  <div className="logo">LUCID</div>
  <input type="text" placeholder="Search here..." className="search-bar"/>
  <div className="header-icons">
    <i className="icon-calendar">📅</i>
    <i className="icon-envelope">✉️</i>
    <i className="icon-bell">🔔</i>
    <i className="icon-settings">⚙️</i>
  </div>
</header>
      <main>
        <div className="logo1">DASHBOARD</div>
         <div className="head">
         <p>Visitor</p>
         <p>visits</p>
         </div>
      </main>
    <Row>
      <ChartWrapper style={{ flex: '1 1 100%' }}>
        <CombinedChart />
      </ChartWrapper>
    </Row>
    <Row>
      <ChartWrapper>
        <EnergyUsageChart />
      </ChartWrapper>
      <ChartWrapper>
        <LightsChart />
      </ChartWrapper>
      <ChartWrapper>
        <TemperatureChart />
      </ChartWrapper>
    </Row>
    <StatusContainer>
      <StatusCards />
    </StatusContainer>
  </Container>
);

export default App;
