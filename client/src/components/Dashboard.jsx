import React from 'react';
import SideBar from './SideBar/SideBar';
import styled from 'styled-components';
import Main from './DashboardView/Main';

import '../App.css';

function Dashboard() {
  return (
    <MainSection>
      <SideBar />
      <Main />
    </MainSection>
  );
}

const MainSection = styled.section`
  width: 100%;
  display: flex;
  background: #ececec;
`;

export default Dashboard;
